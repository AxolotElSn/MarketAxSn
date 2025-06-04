import {
  USER_REGISTER_STARTED,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_STARTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from '@/store/actions/userActions'
import { InitialStateUser, ActionUser } from '@/store/type'

const initialState: InitialStateUser = {
  user: null,
  isLoading: false,
  errorMessage: '',
}

export function userReducer(state = initialState, action: ActionUser): InitialStateUser {
  switch (action.type) {
    case USER_REGISTER_STARTED:
    case USER_LOGIN_STARTED:
      return { ...state, isLoading: true, errorMessage: '' }

    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload, isLoading: false, errorMessage: '' }

    case USER_REGISTER_FAILURE:
    case USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case USER_LOGOUT:
      return { ...state, user: null, errorMessage: '' }

    default:
      return state
  }
}
