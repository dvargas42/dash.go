import {
  Box,
  Drawer, 
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";
import { useSiderbarDrawer } from "../../hooks/SidebarDrawerHook";

export function Sidebar() {
  const { isOpen, onClose } = useSiderbarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSidebar) {
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="4">
            <DrawerCloseButton mt="6" />

            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  )
}