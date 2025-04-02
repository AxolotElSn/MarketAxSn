import { Dispatch, SetStateAction } from 'react'

export interface PaginationProps {
  setCurrentPage: Dispatch<SetStateAction<number>>
  nexPage: number
  prevPage: number
}
