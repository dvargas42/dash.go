import { ElementType } from "react";
import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text marginLeft="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}