import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: number;
}
class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("ID ERRADO");
    }

    const customer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });
    return customer;
  }
}

export { DeleteCustomerService };
