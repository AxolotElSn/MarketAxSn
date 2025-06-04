import { RootState } from '@/types/types'

export const selectUser = (state: RootState) => state.user.user
export const selectUserLoading = (state: RootState) => state.user.isLoading
export const selectUserError = (state: RootState) => state.user.errorMessage
