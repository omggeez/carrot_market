import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { NextApiRequest, NextApiResponse } from "next";
import { withSession } from "@libs/server/with-session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });

  res.json({
    ok: true,
    profile,
  });
}

export default withSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
