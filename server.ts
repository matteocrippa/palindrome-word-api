import { Application, Router, oakCors } from "./deps.ts";

import { PalindromeMiddleware } from "./middleware.ts";

const app = new Application();

app.use(oakCors({ origin: "*" }));

const router = new Router();

router.get("/", PalindromeMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
