import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;

  const favorites = await client.favorite.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      product: {
        include: {
          _count: {
            select: {
              favorites: true,
            },
          },
        },
      },
    },
  });

  res.json({
    ok: true,
    favorites,
  });
}

export default withSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
