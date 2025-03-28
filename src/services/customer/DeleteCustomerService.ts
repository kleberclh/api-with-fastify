import prismaClient from "../../prisma";

interface DeleteCustomerProps {
  id: number;
}
class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não encontrado");
    }
    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Deletado com sucesso" };
  }
}

export { DeleteCustomerService };
