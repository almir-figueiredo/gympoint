import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });
    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    const { id, name, email, age, weight, height } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async list(req, res) {
    const { name } = req.query;

    if (name) {
      const students = await Student.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

      return res.status(200).json(students);
    }

    const students = await Student.findAll();

    return res.status(200).json(students);
  }

  async details(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    return res.status(200).json(student);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const { email } = req.body;

    let student = await Student.findByPk(id);

    if (email !== undefined && email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email },
      });
      if (studentExists) {
        return res.status(400).json({ error: 'This email is already in use.' });
      }
    }

    student = await student.update(req.body);

    return res.status(200).json(student);
  }

  async delete(req, res) {
    const { id } = req.params;
    Student.destroy({ where: { id } });
    return res.status(200).json({ message: 'Deleted.' });
  }
}

export default new StudentController();
