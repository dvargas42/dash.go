import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsBookLine, RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" alignItems="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          
          <NavLink icon={RiContactsLine}>
            Usuário
          </NavLink>
        </NavSection>
        
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