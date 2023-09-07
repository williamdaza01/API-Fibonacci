import { Request, Response } from "express";
import { calculateFibonacci } from "../Models/fibonacciModel";

export const getFibonacci = (req: Request, res: Response): void => {
  const n = parseInt(req.params.n, 10);
  const result = calculateFibonacci(n);
  res.json({ value: result });
};
