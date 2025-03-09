import { Outlet } from "react-router";

export default function LayoutWrapper() {
  return (
    <div>
      Layout Wrapper
      <Outlet />
    </div>
  );
}
