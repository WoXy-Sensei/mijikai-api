import express from 'express';

import emojis from './links';

const router = express.Router();


router.use('/links', emojis);

export default router;
