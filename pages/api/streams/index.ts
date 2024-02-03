import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { withSession } from "@libs/server/with-session";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    body: { name, price, description },
  } = req;

  if (req.method === "GET") {
    const streams = await client.stream.findMany({
      take: 10,
    });

    res.json({
      ok: true,
      streams,
    });
  } else if (req.method === "POST") {
    const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      stream,
    });
  }
}

export default withSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
