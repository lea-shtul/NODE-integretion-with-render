require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/services', async (req, res) => {
  try {
    const response = await fetch('https://api.render.com/v1/services?limit=100', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Render API error' });
    }

    const data = await response.json();
    res.json(data.map(item => item.service));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));