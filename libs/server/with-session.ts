import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const COOKIE_OPTIONS = {
  cookieName: "CARROT-SESSION",
  password: process.env.SESSION_PASSWORD!,
};

export function withSession(fn: any) {
  return withIronSessionApiRoute(fn, COOKIE_OPTIONS);
}
