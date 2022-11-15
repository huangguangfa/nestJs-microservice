import fastify from 'fastify';
import { FastifyLogger } from '../../../libs/logger';

export function fastifyInstance() {
  const fastifyInstance = fastify({
    logger: FastifyLogger,
  });

  fastifyInstance.addHook('preHandler', function (req, reply, done) {
    if (req.body) {
      req.log.info({ body: JSON.stringify(req.body) });
    }
    done();
  });
  return fastifyInstance;
}
