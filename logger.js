export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const gasRes = await fetch("https://script.google.com/macros/s/AKfycbzDEWIlVVUkb0gyi4byF-wxBnXSeTGVRZFrLsYKGPukdjDhlpu2HvVlKobyy7tsmuyr/exec", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(req.body)
      });
      const text = await gasRes.text();
      res.status(200).send(text);
    } catch (err) {
      res.status(500).json({error: err.message});
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}