import { createParamDecorator } from '@nestjs/common';
import { parse as parseCookie } from 'cookie';

export const Cookie = createParamDecorator((data, req) => parseCookie(req.headers.cookie, data));
