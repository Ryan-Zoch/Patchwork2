import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const form = await request.formData();
    const file = form.get("file") as File;
    const uniqueName = `${Date.now()}-${file.name}`;
    const blob = await put(uniqueName, file, { access: "public" });
    return NextResponse.json(blob);
}