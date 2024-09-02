export async function talkToAi(msg: string) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/prompt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: msg }),
    });
    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
}
