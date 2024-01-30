import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
    body: { answer },
  } = req;

  const alreadyExist = await client.post.findUnique({
    where: {
      id: 2,
    },
    select: {
      id: true,
    },
  });

  if (!alreadyExist) {
    //
  }

  const newAnswer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id!.toString(),
        },
      },
      answer,
    },
  });

  res.json({
    ok: true,
    answer: newAnswer,
  });
}

export default withSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
