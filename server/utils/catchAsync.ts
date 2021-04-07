import { NextFunction, Request, Response } from "express";

/*====================*/

type RouteHandler = (req: Request, res: Response, next?: NextFunction) => any;

/*====================*/

export default function catchAsync(fn: RouteHandler) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch(next);
  };
}
