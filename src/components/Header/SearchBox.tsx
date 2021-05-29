import { Flex, Icon, Input, useBreakpointValue } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const isWideVersion = useBreakpointValue({
    base: 655,
    lg: 400,
  })

  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft= {["6", "0"]}
      maxWidth={isWideVersion}
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
  )
}