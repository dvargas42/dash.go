import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import { useMutation } from 'react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input"
import { SearchBox } from "../../components/Header/SearchBox";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/axios";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function UserCreate() {
  const router = useRouter()

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) =>{
    await createUser.mutateAsync(values)

    router.push('/users')
  }
  
  return (
    <Box>
      <Header />

        <Flex width="100%" maxWidth={1480} marginY="6" marginX="auto" paddingX="6">
          <Sidebar />

          <Box flex="1" flexDirection="column">
            {!isWideVersion && <SearchBox marginY="4"/>}

          <Box
              as="form"
              flex="1"
              borderRadius={8}
              backgroundColor="gray.800"
              padding={["6",
              "8"]}
              onSubmit={handleSubmit(handleCreateUser)}
            >
              <Heading size={ isWideVersion ? "lg" : "md"} fontWeight="normal">Criar Usuário</Heading>

              <Divider marginY="6" borderColor="gray.700" />

              <VStack spacing={["6", "8"]}>
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                  <Input
                    name="name"
                    label="Nome Completo"
                    error={errors.name}
                    {...register('name')}
                  />
                  <Input
                    name="email"
                    label="E-mail"
                    type="email"
                    error={errors.email}
                    {...register('email')}
                  />
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                  <Input
                    name="password"
                    label="Senha"
                    type="password"
                    error={errors.password}
                    {...register('password')}
                  />
                  <Input
                    name="password_confirmation"
                    label="Confimação de senha"
                    type="password"
                    error={errors.password_confirmation}
                    {...register('password_confirmation')}
                  />
                </SimpleGrid>
              </VStack>

              <Flex marginTop="8" justifyContent="flex-end">
                <HStack spacing="4">
                  <Link href="/users" passHref>
                    <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                  </Link>

                  <Button
                    type="submit"
                    colorScheme="pink"
                    isLoading={formState.isSubmitting}
                  >
                    Salvar
                  </Button>
                </HStack>
              </Flex>
            </Box>
          </Box>
        </Flex>
    </Box>
  )
}