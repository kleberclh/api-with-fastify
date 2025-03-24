import prismaClient from "../prisma";

interface FindOneCustomerProps {
  id: number;
}

class FindOneCustomerService {
  async execute({ id }: FindOneCustomerProps) {
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    });
    if (!findCustomer) {
      throw new Error("CLIENTE NÃO ENCONTRADO!");
    }
    return findCustomer;
  }
}

export { FindOneCustomerService };
