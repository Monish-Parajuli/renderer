import { env } from "process";
import fastify from "fastify";

import routes from "./routes";
import { exitOk } from "./hooks";

const app = fastify();
const port = env.PORT ? parseInt(env.PORT) : 8080;
const host = env.HOST || "::";

app.addHook("onResponse", exitOk);

app.register(routes, { prefix: "/api/v1" });

app.listen({ port, host });
