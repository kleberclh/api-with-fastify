import { FastifyRequest, FastifyReply } from "fastify";

import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const deleteCustomerService = new DeleteCustomerController();

    const customer = await deleteCustomerService.execute();
    reply.send(customer);
  }
}
