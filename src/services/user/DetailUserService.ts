import prismaClient from '../../prisma';

class DetailUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return {
      id: user_id,
      name: user.name,
      email: user.email,
    };
  }
}

export { DetailUserService };
