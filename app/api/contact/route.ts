import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Mailgun, etc.
    // 2. Store the message in a database
    // 3. Implement rate limiting to prevent spam

    // For demonstration purposes, we'll just log the data
    console.log("Contact form submission:", { name, email, message })

    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

