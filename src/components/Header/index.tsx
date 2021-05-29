import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationNav'
import { Profile } from './Profile'
import { useSiderbarDrawer } from '../../hooks/SidebarDrawerHook'

export function Header() {
  const { onOpen } = useSiderbarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Abrir barra de navigação"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        >

        </IconButton>
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex 
      alignItems="center"
      marginLeft="auto"
      >
        <NotificationsNav />
        
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}