import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/with-handler";
import { NextApiRequest, NextApiResponse } from "next";
import { Twilio } from "twilio";

const twilioClient = new Twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;

  const user = phone ? { phone: +phone } : email ? { email } : null;
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
    await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}`,
    });
  }

  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
