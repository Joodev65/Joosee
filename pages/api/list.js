import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./public/list.json');

export default function handler(req, res) {
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json(data);
  } else {
    res.status(200).json([]);
  }
}
