import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react"

import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
   <Flex
     width="100vw"
     height="100vh"
     alignItems="center"
     justifyContent="center"
   >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        padding="8"
        flexDirection="column"
        borderRadius={8}
        backgroundColor="gray.800"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          
          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
