import Fastify from "fastify";

import cors from "@fastify/cors";
import { RouteCustomer } from "./routes/customer/RouteCustomer";

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(RouteCustomer);
  try {
    await app.listen({ port: 3333 });
  } catch (error) {
    process.exit(1);
  }
};

start();
