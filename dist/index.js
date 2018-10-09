"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cookie_1 = require("cookie");
exports.Cookie = common_1.createParamDecorator((data, req) => cookie_1.parse(req.headers.cookie || '', data));
