import fastify from 'fastify';
import cors from '@fastify/cors';
import { historicsRoutes } from './routes/historics';

const app = fastify();

app.register(cors, {
  origin: ['http://localhost:5173'],
});
app.register(historicsRoutes);

const serverPort = Number(process.env.PORT ?? 3333);
app
  .listen({
    port: serverPort,
  })
  .then(() => {
    console.log('\x1b[1;34m%s\x1b[0m', `HTTP server running on http://localhost:${serverPort}`);
  });
