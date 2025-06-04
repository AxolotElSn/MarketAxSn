import axios from 'axios'

const API_URL = 'http://localhost:3000'  // адрес json-server

export interface User {
  id?: number
  username: string
  password: string
  role?: string  // Добавляем поле role
}

// Регистрация нового пользователя
export const registerUser = async (user: User): Promise<User> => {
  // Проверяем, что username уникален (json-server не умеет проверять уникальность, делаем запрос вручную)
  const existingUsers = await axios.get<User[]>(`${API_URL}/users`, {
    params: { username: user.username }
  })

  if (existingUsers.data.length > 0) {
    throw new Error('Пользователь с таким именем уже существует')
  }

  // При регистрации добавляем роль 'user', если не указана
  const userToRegister = {
    ...user,
    role: user.role ?? 'user',
  }

  const response = await axios.post<User>(`${API_URL}/users`, userToRegister)
  return response.data
}

// Логин — ищем пользователя по username и password
export const loginUser = async (username: string, password: string): Promise<User | null> => {
  const response = await axios.get<User[]>(`${API_URL}/users`, {
    params: { username, password }
  })

  if (response.data.length === 0) return null
  return response.data[0]
}

// Получение пользователя по ID (для восстановления из куки)
export const fetchUserById = async (id: string): Promise<User | null> => {
  try {
    const response = await axios.get<User>(`${API_URL}/users/${id}`)
    return response.data
  } catch (error) {
    // Если пользователь не найден или ошибка — возвращаем null
    return null
  }
}
