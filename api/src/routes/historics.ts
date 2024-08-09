import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

const bodySchema = z.object({
  title: z.string().max(255),
  content: z.string(),
  proceedingId: z.coerce.number(),
  contactId: z.coerce.number(),
});

export async function historicsRoutes(app: FastifyInstance) {
  app.get('/historics', async (request) => {
    const quertyParamsSchema = z.object({ search: z.string().nullish() });
    const { search } = quertyParamsSchema.parse(request.query);

    const historics = await prisma.historic.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        proceeding: true,
        contact: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        ...(search
          ? {
              OR: [
                {
                  title: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  content: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
              ],
            }
          : {}),
      },
    });

    return historics;
  });

  app.post('/historics', async (request, reply) => {
    const { title, content, proceedingId, contactId } = bodySchema.parse(request.body);

    const { id } = await prisma.historic.create({
      data: {
        title,
        content,
        proceedingId,
        contactId,
      },
    });

    return reply.status(201).send();
  });

  app.put('/historics/:id', async (request) => {
    const paramsSchema = z.object({ id: z.coerce.number() });
    const { id } = paramsSchema.parse(request.params);

    const { title, content, proceedingId, contactId } = bodySchema.parse(request.body);

    await prisma.historic.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        proceedingId,
        contactId,
      },
    });
  });

  app.delete('/historics/:id', async (request) => {
    const paramsSchema = z.object({ id: z.coerce.number() });
    const { id } = paramsSchema.parse(request.params);

    await prisma.historic.delete({
      where: {
        id,
      },
    });
  });
}
