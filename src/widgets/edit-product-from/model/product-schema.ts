import z from 'zod'

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  amount: z.coerce.number().min(1, 'Amount must be greater than 0'),
  bought: z.boolean(),
})
