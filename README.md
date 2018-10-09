# nest-decorators
useful decorators for nest

## ParamDecorator

### Cookie
```ts
// { decode: true } will transfer to cookie.parse https://github.com/jshttp/cookie
async findOne(@Cookie({ decode: true }) cookie) {
  console.log(cookie)
}
```