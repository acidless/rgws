import { Request, Response, NextFunction } from "express";
import AppError from "./AppError";

/*====================*/

type RateLimiterOptions = {
  time: number;
  maxQueries: number;
  methods?: Array<string>;
};

/*====================*/

function createRateLimiter(options: RateLimiterOptions) {
  const ips = new Map();

  setInterval(() => {
    ips.clear();
  }, options.time);

  return function rateLimiter(req: Request, res: Response, next: NextFunction) {
    const isMethodValid = options.methods ? options.methods.includes(req.method) : true;

    if (isMethodValid) {
      const count = ips.get(req.ip) || 0;

      if (count >= options.maxQueries) {
        return next!(new AppError(403, "Вы отправили слишком много запросов на сервер"));
      }

      ips.set(req.ip, count + 1);
    }

    next();
  };
}

/*====================*/

export default createRateLimiter;
