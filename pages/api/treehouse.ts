// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { getTreehouseSuccessAction } from 'state/actions/treehouse'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<getTreehouseSuccessAction["payload"]>
) {
  res.status(200).json({
    "JavaScript": 9652,
    "CSS": 1159,
    "Development Tools": 1024,
    "Databases": 864,
    "HTML": 493,
    "Computer Science": 292,
    "PHP": 165,
    "Design": 148,
    "Business": 112
})
}
