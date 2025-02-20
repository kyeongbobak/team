import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET!;

type VerifyTokenResponse = { error: string | null; email: string | null };

export function verifyToken(req: NextRequest): VerifyTokenResponse {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return { error: "No token provided", email: null };
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { email: string };

    return { error: null, email: decoded.email };
  } catch (error) {
    console.log(error);
    return { error: "Unauthorized : Invalid token", email: null };
  }
}
