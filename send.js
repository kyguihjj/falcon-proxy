export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { url, data } = req.body;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Discord error: ${response.status}`);
    }

    res.status(200).json({ success: true, message: "Êã ÇáÅÑÓÇá ÈäÌÇÍ ?" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
