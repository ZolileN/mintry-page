import { createClient } from '@libsql/client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function getTursoClient() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error('TURSO_DATABASE_URL or TURSO_AUTH_TOKEN is not defined');
  }

  return createClient({ url, authToken });
}

export async function POST(req: Request) {
  try {
    const client = getTursoClient();
    const { email } = await req.json();

    // Basic Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email is required.' }, 
        { status: 400 }
      );
    }

    // Insert into Turso
    await client.execute({
      sql: 'INSERT INTO waitlist (email) VALUES (?)',
      args: [email.toLowerCase().trim()],
    });

    return NextResponse.json(
      { message: 'Welcome to the Fabric. You are on the list.' }, 
      { status: 201 }
    );

  } catch (error: any) {
    // Handle duplicate emails (SQLite error code for unique constraint)
    if (error.code === 'SQLITE_CONSTRAINT') {
      return NextResponse.json(
        { message: 'You are already on the list! We will be in touch.' },
        { status: 200 } // Return 200 so the UI doesn't look like a failure
      );
    }

    console.error('Waitlist Error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' }, 
      { status: 500 }
    );
  }
}
