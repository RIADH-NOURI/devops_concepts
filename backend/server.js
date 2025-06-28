import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "./graphql/schema.js";
import cluster from "node:cluster";
import os from "node:os";
import cors from "cors";
import "./config/ENVConfig.js";




const numCPUs = os.cpus().length;

export const createApp = async () => {

  const app = express();

  app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST'],
  }));

  const server = new ApolloServer({
    schema,
    formatError: (err) => {
      console.error("GraphQL Error:", err.message);
      return err;
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  return app;
};

// ✅ Only start clustered server if NOT in test mode
if (process.env.NODE_ENV !== 'test' && cluster.isPrimary) {
  console.log(`Primary process ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) cluster.fork();

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died, restarting...`);
    cluster.fork();
  });
} else if (process.env.NODE_ENV !== 'test') {
  createApp().then(app => {
    app.listen({ port: 3000 }, () =>
      console.log(`🚀 Server ready at http://localhost:3000/graphql | PID: ${process.pid}`)
    );
  });
}
