import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex alignItems="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Daniel Vargas</Text>
          <Text color="gray.300" fontSize="small">
            dvargas.eng@gmail.com
          </Text>
        </Box>
      )}
    
      <Avatar size="md" name="Daniel Vargas" src="https://github.com/dvargas42.png" />
    </Flex>
  )
}