import { Flex } from '@chakra-ui/react'

import { Logo } from './Header/Logo'
import { SearchBox } from './Header/SearchBox'
import { NotificationsNav } from './Header/NotificationNav'
import { Profile } from './Header/Profile'

export function Header() {
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
      <Logo />

      <SearchBox />

      <Flex 
      alignItems="center"
      marginLeft="auto"
      >
        <NotificationsNav />
        
        <Profile />
      </Flex>
    </Flex>
  )
}