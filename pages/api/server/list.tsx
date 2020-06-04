import { NextApiRequest, NextApiResponse } from 'next';
import { ServerType } from '../../../types/types';

export default (_: NextApiRequest, res: NextApiResponse<ServerType[]>) => {
  res.statusCode = 200;
  res.json([
    { id: 1, name: 'Seven Winds', status: 1 },
    { id: 2, name: 'Softlex', status: 1 },
  ]);
};
