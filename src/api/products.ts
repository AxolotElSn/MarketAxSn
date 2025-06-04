// src/api/products.ts
import { Product } from '@/components/CsvImport/CsvImport' // поправь путь, если нужно

export const createProduct = async (product: Product): Promise<void> => {
  const response = await fetch('http://localhost:4001/pizza', { // правильный URL json-server
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })

  if (!response.ok) {
    throw new Error('Ошибка при создании продукта')
  }
}
