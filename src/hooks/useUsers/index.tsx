import { useQuery, UseQueryOptions } from "react-query"

import { FormatDate } from "../../utils/Format"
import { api } from "../../services/axios"

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  users: User[];
  totalCount: number;
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: FormatDate(user.created_at)
    }
  })

  return {
    users,
    totalCount,
  }
}

export function useUser(page: number, options: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minuts
    ...options
  })
}