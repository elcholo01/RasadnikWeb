export const config = {
  api: { bodyParser: false },
};

const BACKEND_URL = process.env.BACKEND_URL || 'https://rasadnikweb.onrender.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);

    const backendRes = await fetch(`${BACKEND_URL}/api/ai-dizajn`, {
      method: 'POST',
      headers: { 'content-type': req.headers['content-type'] || '' },
      body,
    });

    const data = await backendRes.json();
    return res.status(backendRes.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Proxy greška: ' + err.message });
  }
}
