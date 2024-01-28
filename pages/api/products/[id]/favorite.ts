import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  const alreadyExist = await client.favorite.findFirst({
    where: {
      productId: +id!.toString(),
      userId: user?.id,
    },
  });

  if (alreadyExist) {
    await client.favorite.delete({
      where: {
        id: alreadyExist.id,
      },
    });
  } else {
    await client.favorite.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        product: {
          connect: {
            id: +id!.toString(),
          },
        },
      },
    });
  }

  res.json({ ok: true });
}

export default withSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
