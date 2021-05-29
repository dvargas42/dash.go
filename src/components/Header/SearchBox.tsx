import { Flex, Icon, Input, useBreakpointValue, FlexProps } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

type SearchBoxProps = FlexProps 

export function SearchBox({...rest}: SearchBoxProps ) {
  const isWideVersion = useBreakpointValue({
    base: 991,
    lg: 400,
  })

  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft= {isWideVersion === 400 ? "6" : "0"}
      maxWidth={isWideVersion}
      alignSelf="center"
      color="gray.200"
      position="relative"
      backgroundColor="gray.800"
      borderRadius="full"
      {...rest}
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