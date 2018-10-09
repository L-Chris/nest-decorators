import { createParamDecorator } from '@nestjs/common';
import { parse as parseCookie } from 'cookie';

// param decorator
export const Cookies = createParamDecorator((data, req) => parseCookie(req.headers.cookie || '', data));
