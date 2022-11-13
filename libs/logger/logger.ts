import { join } from 'path';
import { FileStream } from './fileStream';
import { LogStream } from './logStream';

import { multistream } from 'pino-multi-stream';

// const multiStream = multiStreams.multistream;

function asReqValue(req) {
  if (req.raw) {
    req = req.raw;
  }
  let device_id, tt_webid;
  if (req.headers.cookie) {
    device_id = req.headers.cookie.match(/device_id=([^;&^\s]+)/);
    tt_webid = req.headers.cookie.match(/tt_webid=([^;&^\s]+)/);
  }
  device_id && (device_id = device_id[1]);
  tt_webid && (tt_webid = tt_webid[1]);

  return {
    id: req.id,
    method: req.method,
    url: req.url,
    remoteAddress: req.connection ? req.connection.remoteAddress : '',
    remotePort: req.connection ? req.connection.remotePort : '',
    device_id,
    tt_webid,
  };
}

const reqIdGenFactory = () => {
  const maxInt = 2147483647;
  let nextReqId = 0;
  return (req) => {
    return (
      req.headers['X-TT-logId'] ||
      req.headers['x-tt-logId'] ||
      (nextReqId = (nextReqId + 1) & maxInt)
    );
  };
};

export const fastLogger = (opt) => {
  const reOpt = {
    console: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
    level: 'info',
    fileName: join(process.cwd(), 'logs/fastify.log'),
    genReqId: reqIdGenFactory(),
    serializers: {
      req: asReqValue,
    },
    formatOpts: {
      lowres: true,
    },
    ...opt,
  };

  // 添加落库日志
  const allStreams = [
    {
      stream: new FileStream(reOpt).trans,
    },
  ];

  // 开发环境打印控制台日志
  if (reOpt.console) {
    allStreams.push({
      stream: new LogStream().trans,
    });
  }

  reOpt.stream = multistream(allStreams);

  return reOpt;
};
