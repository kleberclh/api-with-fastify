import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../../services/customer/DeleteCustomerService";


class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    if (!id) {
      return reply.status(400).send({ error: "ID é obrigatório" });
    }

    const customerService = new DeleteCustomerService();

    try {
      const customer = await customerService.execute({ id: Number(id) });
      return reply.send(customer);
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(500).send({ error: error.message });
      }
      return reply.status(500).send({ error: "Erro inesperado" });
    }
  }
}

export { DeleteCustomerController };
