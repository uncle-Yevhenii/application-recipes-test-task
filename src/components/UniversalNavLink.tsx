import { Link } from "react-router";

import { Button } from "@/components/ui/button";

type UniversalLinkProps = {
  to: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Button>;

export function UniversalLink({ to, children, ...props }: UniversalLinkProps) {
  return (
    <Button {...props} asChild>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
