// src/types/express/index.d.ts
import { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../../app/modules/user/user.interface';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | IUser;
    }
  }
}

export {}