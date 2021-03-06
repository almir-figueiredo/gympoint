import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdCheckCircle } from 'react-icons/md';
import { formatDate } from '../../utils/format';

import { Container, Content, Table } from '../../styles/global';
import MenuBar from '../../components/MenuBar';

import api from '../../services/api';
import history from '../../services/history';

import { registrationEditRequest } from '../../store/modules/registration/actions';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const response = await api.get('enrollments');

      const data = response.data.map(registration => ({
        ...registration,
        startDateFormatted: formatDate(registration.start_date),
        endDateFormatted: formatDate(registration.end_date),
      }));
      setRegistrations(data);
    }
    loadData();
  }, []);

  async function handleEdit(registrationId) {
    const registration = registrations.find(r => r.id === registrationId);

    dispatch(registrationEditRequest(registration));

    history.push(`/registrations/details/${registrationId}`);
  }

  async function handleDelete(registrationId) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Deseja deletar esta Matrícula?') === true) {
      await api.delete(`enrollments/${registrationId}`);
      setRegistrations(
        registrations.filter(registration => registration.id !== registrationId)
      );
    }
  }

  return (
    <Container>
      <MenuBar title="Alunos Matriculados" route="registrations" />
      <Content>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.startDateFormatted}</td>
                <td>{registration.endDateFormatted}</td>
                <td>
                  <MdCheckCircle
                    size={20}
                    color={registration.active ? '#72cb59' : '#ddd'}
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(registration.id)}
                    className="edit"
                    type="button"
                  >
                    editar
                  </button>
                  <button
                    onClick={() => handleDelete(registration.id)}
                    className="delete"
                    type="button"
                  >
                    deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
