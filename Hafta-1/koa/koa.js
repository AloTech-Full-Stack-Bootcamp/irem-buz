const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// LOGGER MIDDLEWARE

app.use(async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.url} ${new Date()}`);
  await next();
});

// INDEX

router.get("/", (ctx) => {
  ctx.body = `<h2>IREM'IN INDEX SAYFASINA HOSGELDINIZ (:</h2>`;
});

// HAKKIMDA

router.get("/hakkimda", (ctx) => {
  ctx.body = `<h2>IREM'IN HAKKIMDA SAYFASINA HOSGELDINIZ :)</h2>`;
});

// ILETISIM

router.get("/iletisim", (ctx) => {
  ctx.body = `<h2>IREM'IN ILETISIM SAYFASINA HOSGELDINIZ (:</h2>`;
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(5000);
