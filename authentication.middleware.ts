// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response } from 'express';

// @Injectable()
// export class AuthenticationMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: Function) {
//     console.log(' Inside Authentication Middleware...');
//     next();
//   }
// }
import { Request, Response } from 'express';

export function AuthenticationMiddleware(req: Request, res: Response, next: Function) {
  console.log(`Inside Authentication Middleware`);
  next();
}
