import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply,
  } from "fastify";
import { CreateCustomerController } from "../../controllers/customer/CreateCustomerController";
import { ListCustomersController } from "../../controllers/customer/ListCustomersController";
import { DeleteCustomerController } from "../../controllers/customer/DeleteCustomerController";
import { UpdateCustomerController } from "../../controllers/customer/UpdateCustomerController";
import { FindOneCustomerController } from "../../controllers/customer/FindOneCustomerController";

  
  export async function RouteCustomer(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
  ) {
    fastify.get(
      "/teste",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: false };
      }
    );
  
    fastify.post(
      "/customer",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
      }
    );
    fastify.get(
      "/customers",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
      }
    );
    fastify.delete(
      "/customer",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
      }
    );
    fastify.put(
      "/customer",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCustomerController().handle(request, reply);
      }
    );
    fastify.get(
      "/customer",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new FindOneCustomerController().handle(request, reply);
      }
    );
  }
  