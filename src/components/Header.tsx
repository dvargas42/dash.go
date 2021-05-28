import { Box, Flex, Input, Icon, Text, HStack, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

import { NotificationsNav } from './Header/NotificationNav'
import { Profile } from './Header/Profile'
import { SearchBox } from './Header/SearchBox'

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
      <Text
        width="64"
        fontSize="3xl"
        fontWeight= "bold"
        letterSpacing="tight"
      >
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">.</Text>
      </Text>

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