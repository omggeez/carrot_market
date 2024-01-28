import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const products = await client.product.findMany({
      include: {
        _count: {
          select: {
            favorites: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      products,
    });
  }

  if (req.method === "POST") {
    const {
      body: { name, price, description },
      session: { user },
    } = req;

    const product = await client.product.create({
      data: {
        name,
        price: +price,
        description,
        image: "",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      product,
    });
  }
}

export default withSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
