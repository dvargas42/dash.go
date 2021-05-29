import { ElementType } from "react";
import { Icon, Link, Text } from "@chakra-ui/react";

interface NavLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20"/>
      <Text marginLeft="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}