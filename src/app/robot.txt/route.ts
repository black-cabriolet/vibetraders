import { NextResponse } from "next/server";

export async function GET() {
    const body = `
User-agent: *
Allow: /

Sitemap: https://vibetraders.vercel.app/sitemap.xml
`;

    return new NextResponse(body, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}