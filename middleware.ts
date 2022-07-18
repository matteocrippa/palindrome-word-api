import { RouterMiddleware, Random } from "./deps.ts";
import { Palindrome } from "./palindrome.ts";

export const PalindromeMiddleware: RouterMiddleware<"/"> = (ctx) => {
    const r = new Random();
  const word = Palindrome[r.int(0, Palindrome.length)];

  ctx.response.body = { word };
};