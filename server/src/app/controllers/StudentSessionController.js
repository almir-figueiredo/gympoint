import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import Student from '../models/Student';

class StudentSessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email } = req.body;

    const student = await Student.findOne({ where: { email } });

    if (!student) {
      return res.status(401).json({ error: 'Invalid email.' });
    }

    const { id, name } = student;

    return res.json({
      student: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id, email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new StudentSessionController();
