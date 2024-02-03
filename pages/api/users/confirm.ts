import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { NextApiRequest, NextApiResponse } from "next";
import { withSession } from "@libs/server/with-session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!foundToken) return res.status(404).end();

  req.session.user = {
    id: foundToken?.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  return res.json({ ok: true });
}

export default withSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
  })
);
