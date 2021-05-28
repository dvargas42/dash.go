import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex alignItems="center">
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
  )
}