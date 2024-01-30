import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;

  const alreadyExist = await client.like.findFirst({
    where: {
      userId: user?.id,
      postId: +id!.toString(),
    },
    select: {
      id: true,
    },
  });

  if (alreadyExist) {
    await client.like.delete({
      where: {
        id: alreadyExist.id,
      },
    });
  } else {
    await client.like.create({
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
      },
    });
  }

  res.json({
    ok: true,
  });
}

export default withSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
