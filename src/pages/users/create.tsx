import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input"

export default function UserCreate() {
  return (
    <Box>
      <Header />

      <Flex width="100%" maxWidth={1480} marginY="6" marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="password" label="Senha" type="password" />
              <Input name="password" label="Confimação de senha" type="password" />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}