import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsBookLine, RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" alignItems="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>

          <Stack spacing="4" marginTop="8" alignItems="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20"/>
              <Text marginLeft="4" fontWeight="medium">Dashboard</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">Usuário</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>

          <Stack spacing="4" marginTop="8" alignItems="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20"/>
              <Text marginLeft="4" fontWeight="medium">Formulário</Text>
            </Link>
            
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20"/>
              <Text marginLeft="4" fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}