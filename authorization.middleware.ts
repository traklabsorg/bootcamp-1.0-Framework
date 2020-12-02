// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response } from 'express';

// @Injectable()
// export class AuthorizationMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: Function) {
//     console.log(' Inside Authorization Middleware...');
//     next();
//   }
// }

import { Request, Response } from 'express';

export function AuthorizationMiddleware(req: Request, res: Response, next: Function) {
  console.log(`Inside Authorization Middleware...`);
  next();
}

