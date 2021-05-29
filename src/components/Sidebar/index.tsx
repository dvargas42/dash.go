import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
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

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>
            Formulário
          </NavLink>
          
          <NavLink icon={RiGitMergeLine}>
            Automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}