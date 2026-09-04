const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-3.5-flash-lite'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

export async function askGemini(text : string) : Promise<string> {
    const res = await fetch(ENDPOINT, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'x-goog-api-key' : API_KEY
        },
        body : JSON.stringify({
            contents : [{
                role : 'user',
                parts : [{text}],
            }],
        })
        
    })
    if(!res.ok) {
            throw new Error(`${res.status} ${await res.text()}`);
            
        }
    const data = await res.json()
    return data.candidates[0]
    .content.parts[0].text;
}