const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/help', (ctx, next) => {
  return 'test result'
});

app.use(router.routes());

app.listen(9225);