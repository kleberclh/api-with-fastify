import { FastifyRequest, FastifyReply } from "fastify";

import { FindOneCustomerService } from "../services/FondOneCustomerService";

class FindOneCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    if (!id) {
      return reply.status(400).send({ error: "ID é obrigatório" });
    }
    const lisCustomerService = new FindOneCustomerService();

    const customers = await lisCustomerService.execute({ id: Number(id) });
    reply.send(customers);
  }
}

export { FindOneCustomerController };
