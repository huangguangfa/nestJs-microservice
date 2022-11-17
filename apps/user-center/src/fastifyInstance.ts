import fastify from 'fastify';
import { FastifyLogger } from '@app/common/logger';

export function fastifyInstance() {
  const fastifyInstance = fastify({
    logger: FastifyLogger,
  });
  fastifyInstance.addHook('preHandler', function (req, reply, done) {
    if (req.body) {
      const params = `请求参数 =>>>>> body：${JSON.stringify(
        req.body,
      )} -- query：${JSON.stringify(req.query)}`;
      req.log.info(params);
    }
    done();
  });
  return fastifyInstance;
}
