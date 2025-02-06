import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.headers.set("user", JSON.stringify(decoded));
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }
}

export const config = {
  matcher: [],
};
