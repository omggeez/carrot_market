import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    body: { message: bodyMessage },
    session: { user },
  } = req;

  const message = await client.message.create({
    data: {
      message: bodyMessage,
      stream: {
        connect: {
          id: +id!.toString(),
        },
      },
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  res.json({
    ok: true,
    message,
  });
}

export default withSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
