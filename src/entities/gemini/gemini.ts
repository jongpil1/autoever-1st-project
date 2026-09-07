const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-3.5-flash-lite'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

export async function askGemini(messages: { role: "user" | "model"; text: string }[], systemContext: string): Promise<string> {
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': API_KEY
        },
        body: JSON.stringify({
            system_instruction: {
                parts: [
                    {
                        text: systemContext,
                    },
                ],
            },
            contents: messages.map((message) => ({
                role: message.role,
                parts: [
                    {
                        text: message.text,
                    },
                ],
            })),
        }),

    })
    const data = await res.json();

    if (!res.ok) {
        console.error("Gemini API error:", data);

        const error = new Error(
            data?.error?.message || data?.error || "UNKNOWN"
        );

        (error as Error & { status?: number }).status = res.status;

        throw error;
    }

    return data.candidates[0].content.parts[0].text;
}