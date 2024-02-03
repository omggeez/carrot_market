import client from "@libs/server/client";
import withHandler from "@libs/server/with-handler";
import { NextApiRequest, NextApiResponse } from "next";
import { withSession } from "@libs/server/with-session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
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

  if (req.method === "POST") {
    const {
      session: { user },
      body: { name, email, phone },
    } = req;

    const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (name) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name,
        },
      });
    }

    if (email && email !== currentUser?.email) {
      const alreadyExist = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
          },
        })
      );

      if (alreadyExist) {
        return res.json({
          ok: false,
          error: "Email already taken.",
        });
      }

      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          email,
        },
      });

      res.json({
        ok: true,
      });
    }

    if (phone && phone !== currentUser?.phone) {
      const alreadyExist = Boolean(
        await client.user.findUnique({
          where: {
            phone,
          },
          select: {
            id: true,
          },
        })
      );

      if (alreadyExist) {
        return res.json({
          ok: false,
          error: "Phone number already in use.",
        });
      }

      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phone,
        },
      });

      res.json({
        ok: true,
      });
    }

    res.json({
      ok: true,
    });
  }
}

export default withSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
