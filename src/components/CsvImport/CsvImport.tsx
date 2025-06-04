import React, { useState } from 'react'
import Papa from 'papaparse'
import { createProduct } from '@/api/products' // проверь путь!

export interface Product {
  name: string
  description: string
  price: number
  size?: string
  image?: string
}

const productFields = ['name', 'description', 'price', 'size', 'image']

export const CsvImport = () => {
  const [csvData, setCsvData] = useState<string[][]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const [mapping, setMapping] = useState<Record<string, string>>({})

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    Papa.parse<string[]>(file, {
      complete: (results) => {
        if (results.data.length > 0) {
          setHeaders(results.data[0])
          setCsvData(results.data.slice(1))
          setMapping({})
        }
      },
      error: (error, file) => {
        alert('Ошибка чтения CSV: ' + error.message)
      },
      skipEmptyLines: true,
    })
  }

  const handleMappingChange = (field: string, csvColumn: string) => {
    setMapping((prev) => ({ ...prev, [field]: csvColumn }))
  }

  const createProducts = (): Product[] => {
    return csvData.map((row) => {
      const product: any = {}
      for (const field of productFields) {
        const col = mapping[field]
        if (col) {
          const colIndex = headers.indexOf(col)
          product[field] = row[colIndex]
        }
      }
      if (product.price) product.price = parseFloat(product.price)
      return product as Product
    })
  }

  const handleImport = async () => {
    const products = createProducts()
    try {
      await Promise.all(products.map((p) => createProduct(p)))
      alert(`Успешно импортировано ${products.length} товаров`)
    } catch (error: any) {
      alert('Ошибка при импорте: ' + (error.message || error.toString()))
    }
  }

  return (
    <div>
      <h2>Импорт товаров из CSV</h2>
      <input type="file" accept=".csv,text/csv" onChange={handleFileChange} />

      {headers.length > 0 && (
        <>
          <h3>Сопоставьте поля товара с колонками CSV</h3>
          <table>
            <thead>
              <tr>
                <th>Поле товара</th>
                <th>Колонка CSV</th>
              </tr>
            </thead>
            <tbody>
              {productFields.map((field) => (
                <tr key={field}>
                  <td>{field}</td>
                  <td>
                    <select
                      value={mapping[field] || ''}
                      onChange={(e) => handleMappingChange(field, e.target.value)}
                    >
                      <option value="">-- не выбрано --</option>
                      {headers.map((header) => (
                        <option key={header} value={header}>
                          {header}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={handleImport}>Импортировать</button>
        </>
      )}
    </div>
  )
}
