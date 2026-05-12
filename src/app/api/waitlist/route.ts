import { NextRequest, NextResponse } from 'next/server';
import { addEmail, getCount } from '@/lib/waitlist';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Basic regex validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    addEmail(email);

    return NextResponse.json({ 
      success: true, 
      count: getCount(),
    });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    count: getCount(),
  });
}
