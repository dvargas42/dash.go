import { useQuery } from "react-query"

import { FormatDate } from "../../../utils/Format"
import { api } from "../../services/axios"

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export  async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users')

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: FormatDate(user.createdAt)
    }
  })

  return users
}

export function useUser() {
  return useQuery('users', getUsers,{
    staleTime: 1000 * 10, //10 seconds
  })
}