import { PropsWithChildren } from "react";

import { AppNav } from "@/components/AppNav";

type LayoutWrapperProps = PropsWithChildren;

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="main-container">
      <header>
        <AppNav />
      </header>

      {children}
    </div>
  );
}
