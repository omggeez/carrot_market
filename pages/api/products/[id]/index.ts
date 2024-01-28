import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;

  const product = await client.product.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  const terms = product?.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));
  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms,
      AND: {
        id: {
          not: product?.id,
        },
      },
    },
  });

  const isLiked = Boolean(
    await client.favorite.findFirst({
      select: {
        id: true,
      },
      where: {
        productId: product?.id,
        userId: user?.id,
      },
    })
  );

  res.json({ ok: true, product, isLiked, relatedProducts });
}

export default withSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
