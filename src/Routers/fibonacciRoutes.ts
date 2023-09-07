import { Router } from 'express';
import { getFibonacci } from '../Controllers/fibonacciController';

const router = Router();

router.get('/fibonacci/:n', getFibonacci);

export default router;
