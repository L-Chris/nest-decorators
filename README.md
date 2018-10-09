# nest-decorators
useful decorators for nest

## ParamDecorator

### Cookies
```ts
import { Cookies } from 'nest-decorators'
// { decode: true } will transfer to cookie.parse https://github.com/jshttp/cookie
async findOne(@Cookies({ decode: true }) cookie) {
  console.log(cookie)
}
```