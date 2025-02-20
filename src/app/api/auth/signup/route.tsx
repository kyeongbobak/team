import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "회원가입 성공!" });
  } catch (error) {
    console.log("Error fetching data:", error);
    return NextResponse.json({ error: "회원가입 중 오류 발생" }, { status: 500 });
  }
}
