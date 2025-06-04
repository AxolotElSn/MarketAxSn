import axios from 'axios'

const API_URL = 'http://localhost:3000'  // адрес json-server

export interface User {
  id?: number
  username: string
  password: string
}

// Регистрация нового пользователя
export const registerUser = async (user: User): Promise<User> => {
  // Проверим, что username уникален (json-server не умеет проверять уникальность, делаем запрос вручную)
  const existingUsers = await axios.get<User[]>(`${API_URL}/users`, {
    params: { username: user.username }
  })
  if (existingUsers.data.length > 0) {
    throw new Error('Пользователь с таким именем уже существует')
  }
  const response = await axios.post<User>(`${API_URL}/users`, user)
  return response.data
}

// Логин — ищем пользователя по username и password
export const loginUser = async (username: string, password: string): Promise<User | null> => {
  const response = await axios.get<User[]>(`${API_URL}/users`, {
    params: { username, password }
  })
  return response.data.length > 0 ? response.data[0] : null
}
