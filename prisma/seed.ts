import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  [...Array.from(Array(500).keys())].forEach(async (item) => {
    const stream = await client.stream.create({
      data: {
        name: String(item),
        price: item,
        description: String(item),
        user: {
          connect: {
            id: 2,
          },
        },
      },
    });

    console.log(`${item}/500`);
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => client.$disconnect());
