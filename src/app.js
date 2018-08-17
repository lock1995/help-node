const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/help', (ctx, next) => {
  ctx.type = 'application/json;charset=UTF-8'
  ctx.body = {
    count: 10
  }
  ctx.status = 200
});

app.use(router.routes());

app.listen(9225);
