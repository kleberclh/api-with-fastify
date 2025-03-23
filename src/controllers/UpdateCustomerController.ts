import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const { name, email } = request.body as { name: string; email: string };

    if (!id) {
      return reply.status(400).send({ error: "ID é obrigatório" });
    }
    if (!name || !email) {
      return reply.status(400).send({ error: "Nome e email são obrigatórios" });
    }

    const customerService = new UpdateCustomerService();
    try {
      const customer = await customerService.execute({
        id: Number(id),
        name,
        email,
      });
      return reply.send(customer);
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(500).send({ error: error.message });
      }
      return reply.status(500).send({ error: "Erro inesperado" });
    }
  }
}

export { UpdateCustomerController };
