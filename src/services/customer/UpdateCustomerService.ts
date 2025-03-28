import prismaClient from "../../prisma";


interface UpdateCustomerProps {
  id: number;
  name: string;
  email: string;
}

class UpdateCustomerService {
  async execute({ id, name, email }: UpdateCustomerProps) {
    if (!id) {
      throw new Error("Nenhum ID fornecido!");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: { id },
    });

    if (!findCustomer) {
      throw new Error("Cliente não encontrado");
    }

    await prismaClient.customer.update({
      where: { id: findCustomer.id },
      data: { name, email },
    });

    return { message: "Atualizado com sucesso" };
  }
}

export { UpdateCustomerService };
