import { z } from 'zod';

export const expenseSchema = z.object({
  summary: z.string().min(1, 'Summary is required').max(255),
  category: z.string().min(1, 'Category is required'),
  sum: z.string().min(1, 'Sum is required'),
  currency: z.string().min(1, 'Currency is required')
});
