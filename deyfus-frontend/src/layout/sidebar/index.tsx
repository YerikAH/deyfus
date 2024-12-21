import { useState } from "react";
import {
  ArchiveBoxIcon,
  ChartPieIcon,
  BuildingOfficeIcon,
  HomeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { SidebarMobile } from "./sidebar-mobile";
import { SidebarDesktop } from "./sidebar-desktop";
import { Navigation } from "./navigation";
import { Outlet } from "react-router-dom";
import {
  ChartPieIcon as ChartPieIconActive,
  BuildingOfficeIcon as BuildingOfficeIconActive,
  HomeIcon as HomeIconActive,
  ArchiveBoxIcon as ArchiveBoxIconActive,
  Cog6ToothIcon as Cog6ToothIconActive,
} from "@heroicons/react/24/solid";
import { ROUTER } from "@/routes/routes";

const navigation = [
  {
    name: "Dashboard",
    href: ROUTER.DASHBOARD,
    icon: HomeIcon,
    activeIcon: HomeIconActive,
    current: true,
  },
  {
    name: "Productos",
    href: ROUTER.PRODUCTS,
    icon: ArchiveBoxIcon,
    activeIcon: ArchiveBoxIconActive,
    current: false,
  },
  {
    name: "Sucursales",
    href: ROUTER.BRANCHES,
    icon: BuildingOfficeIcon,
    activeIcon: BuildingOfficeIconActive,
    current: false,
  },
  {
    name: "Ventas",
    href: ROUTER.SALES,
    icon: ChartPieIcon,
    activeIcon: ChartPieIconActive,
    current: false,
  },
  {
    name: "Configuración",
    href: ROUTER.SETTINGS,
    icon: Cog6ToothIcon,
    activeIcon: Cog6ToothIconActive,
    current: false,
  },
];
const teams = [
  { id: 1, name: "Cajamarca", href: "#", initial: "C", current: false },
  { id: 2, name: "Open Plaza", href: "#", initial: "O", current: false },
];

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <SidebarMobile
          navigation={navigation}
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          teams={teams}
        />

        <SidebarDesktop navigation={navigation} teams={teams} />

        <Navigation setSidebarOpen={setSidebarOpen} />

        <main className="py-10 lg:pl-72 bg-stone-900 h-screen overflow-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
