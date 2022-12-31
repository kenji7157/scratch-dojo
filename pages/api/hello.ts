// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('-- テスト --');
  // ここでFirebase Authを用いて、 googleのログイン画面に遷移させたい
  res.status(200).json({ name: 'John Doe' });
}
