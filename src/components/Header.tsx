import { Box, Flex, Input, Icon, Text, HStack, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

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

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        backgroundColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: 'gray.400',
          }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex 
      alignItems="center"
      marginLeft="auto"
      >
        <HStack
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20"/>
          
          <Icon as={RiUserAddLine} fontSize="20"/>
        </HStack>
        <Box marginRight="4" textAlign="right">
          <Text>Daniel Vargas</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            dvargas.eng@gmail.com
          </Text>
        </Box>
        
        <Avatar size="md" name="Daniel Vargas" src="https://github.com/dvargas42.png" />
      </Flex>
    </Flex>
  )
}