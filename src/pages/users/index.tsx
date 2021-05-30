import Link from "next/link";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { SearchBox } from "../../components/Header/SearchBox";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUser } from "../../hooks/useUsers";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUser()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex width="100%" maxWidth={1480} marginY="6" marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" flexDirection="column">
          {!isWideVersion && <SearchBox marginY="4"/>}

          <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding={["5", "8"]}>
            <Flex marginBottom="8" justifyContent="space-between" alignItems="center">
              <Heading size="lg" fontWeight="normal">
                Usuários

                { !isLoading && isFetching && <Spinner size="sm" color="gray.500" marginLeft="4" />}
              </Heading>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            { isLoading ? (
              <Flex justifyContent="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justifyContent="center">
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th width={isWideVersion ? "8" : "6"} paddingX={isWideVersion ? "6" : "3"} color="gray.300">
                        <Checkbox colorScheme="pink" />
                      </Th>

                      <Th paddingX={isWideVersion ? "6" : "3"} >Usuário</Th>

                      { isWideVersion && <Th>Data de Cadastro</Th> }

                      <Th width={isWideVersion ? "8" : "3"}></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map(user => (
                      <Tr key={user.id} color="white">
                        <Td paddingX={isWideVersion ? "6" : "3"}>
                          <Checkbox colorScheme="pink" />
                        </Td>
  
                        <Td paddingX={isWideVersion ? "6" : "3"}>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize={isWideVersion ? "sm" : "x-small"} color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
  
                        { isWideVersion && <Td>{user.createdAt}</Td> }
  
                        <Td paddingX={isWideVersion ? "6" : "3"}>
                          { isWideVersion ? (
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                            >
                              Editar
                            </Button>
                            ):(
                            <IconButton
                              aria-label="Botão editar"
                              as="a"
                              size="sm"
                              colorScheme="purple"
                              icon={<Icon as={RiPencilLine} fontSize="16"/>}
                            />
                          )}
                        </Td>
                      </Tr>
                    )
                    )}
                  </Tbody>
                </Table>

                <Pagination />
              </>
            )}
          </Box>
        </Box>  
      </Flex>
    </Box>
  )
}