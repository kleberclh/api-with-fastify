import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const lisCustomerService = new ListCustomersService();

    const customers = await lisCustomerService.execute();
    reply.send(customers);
  }
}

export { ListCustomersController };
