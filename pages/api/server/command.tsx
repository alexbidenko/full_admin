import { NextApiRequest, NextApiResponse } from 'next';
import { CommandType } from '../../../types/types';

export default (req: NextApiRequest, res: NextApiResponse<CommandType>) => {
  res.statusCode = 200;
  res.json(req.body);
};
