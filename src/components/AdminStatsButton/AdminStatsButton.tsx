// src/components/AdminStatsButton/AdminStatsButton.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '@/store/selectors/userSelectors'
import { Button } from '@/components/ui/Button/Button'

export const AdminStatsButton = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  if (!user || user.username !== 'admin') {
    return null
  }

  return (
    <Button
      $variation="secondary"
      style={{ marginLeft: 10 }}
      onClick={() => navigate('/stats')}
    >
      📊 Статистика продаж
    </Button>
  )
}
