import { FooterComponent } from "@/components/FooterComponent";
import { HeaderComponent } from "@/components/HeaderComponent";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}
