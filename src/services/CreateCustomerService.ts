import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const emailExiste = await prismaClient.customer.findUnique({
      where: { email },
    });

    if (emailExiste) {
      throw new Error("Email já está sendo utilizado por outro usuário");
    }

    const newCustomer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return newCustomer;
  }
}

export { CreateCustomerService };
