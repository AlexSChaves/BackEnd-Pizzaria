import { hash } from 'bcryptjs';
import prismaClient from '../../prisma';

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email || !password) {
      throw new Error('Email or Password invalid');
    }

    let emailRegex = /\S+@\S+\.\S+/;
    let passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!emailRegex.test(email)) throw new Error('Email format not valid');

    if (!passwordRegex.test(password))
      throw new Error(
        'Password must be at least 6 characters long, ' +
          'include at leat one number, one capital letter and one special letter'
      );

    if (password.length < 6) {
      throw new Error('password must be at least 6 characters');
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return { user };
  }
}

export { CreateUserService };
