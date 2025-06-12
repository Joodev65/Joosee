import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./public/list.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;
    let data = [];

    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    if (!data.includes(id)) {
      data.push(id);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}