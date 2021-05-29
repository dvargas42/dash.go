import { ElementType } from "react";
import Link from 'next/link'
import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text marginLeft="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}