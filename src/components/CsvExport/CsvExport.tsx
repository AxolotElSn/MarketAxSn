// src/components/CsvExport/CsvExport.tsx
import React from 'react'
import Papa from 'papaparse'
import { Product } from '@/components/CsvImport/CsvImport' // проверь путь, чтобы правильно импортировать Product

export const CsvExport: React.FC = () => {
  const handleExport = async () => {
    try {
      // Получаем данные с сервера (у тебя тут /pizza — проверь API)
      const response = await fetch('http://localhost:4001/pizza')
      if (!response.ok) {
        throw new Error('Ошибка при загрузке продуктов')
      }
      const products: Product[] = await response.json()

      // Формируем CSV только с нужными полями в нужном порядке
      // Это нужно, чтобы не было лишних колонок
      const dataToExport = products.map(({ name, description, price, size, image }) => ({
        name,
        description,
        price,
        size,
        image,
      }))

      // Конвертируем массив объектов в CSV
      const csv = Papa.unparse(dataToExport)

      // Создаём Blob из CSV и URL для скачивания
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)

      // Создаём временную ссылку для скачивания и кликаем по ней
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'products_export.csv')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      alert('Ошибка при экспорте: ' + (error instanceof Error ? error.message : String(error)))
    }
  }

  return <button onClick={handleExport}>Экспорт CSV</button>
}
