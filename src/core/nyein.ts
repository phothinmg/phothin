import type {
  HonoOptions,
  BlankEnv,
  Env,
  BlankSchema,
  Schema,
} from "../dependencies/deps.ts";
import {
  RegExpRouter,
  SmartRouter,
  TrieRouter,
  Hono,
} from "../dependencies/deps.ts";

export class Nyein<
  E extends Env = BlankEnv,
  S extends Schema = BlankSchema,
  BasePath extends string = "/"
> extends Hono<E, S, BasePath> {
  constructor(options: HonoOptions<E> = {}) {
    super(options);
    this.router =
      options.router ??
      new SmartRouter({
        routers: [new RegExpRouter(), new TrieRouter()],
      });
  }
}
