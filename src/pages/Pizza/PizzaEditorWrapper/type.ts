import { Pizza } from '@/api/pizza/type'

export type FormValues = Omit<Pizza, 'id'>
