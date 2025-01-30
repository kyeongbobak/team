import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.review.findMany();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}
