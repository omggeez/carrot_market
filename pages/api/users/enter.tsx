import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/with-handler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;

  const user = phone ? { phone: phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });

  const payload = (Math.floor(Math.random() * 999999) + "").padStart(6, "0");

  await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    console.log(payload);
  } else if (email) {
    console.log(payload);
  }

  return res.json({
    ok: true,
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
  isPrivate: false,
});
