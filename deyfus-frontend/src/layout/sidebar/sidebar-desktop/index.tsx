import { classNames } from "@/utils";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

interface Props {
  navigation: {
    name: string;
    href: string;
    icon: React.ElementType;
    activeIcon: React.ElementType;
    current: boolean;
  }[];
  teams: {
    id: number;
    name: string;
    href: string;
    initial: string;
    current: boolean;
  }[];
}

export const SidebarDesktop: React.FC<Props> = ({ navigation, teams }) => {
  const location = useLocation();
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-stone-800 bg-stone-950 px-6">
        <div className="flex h-16 shrink-0 items-center">
          <img alt="Your Company" src={logo} className="h-8 w-auto" />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 ">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-yellow-300/10 text-yellow-400"
                          : "text-stone-400 hover:bg-stone-900",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                      )}
                    >
                      {location.pathname === item.href ? (
                        <item.activeIcon className="size-6 text-yellow-400 shrink-0" />
                      ) : (
                        <item.icon className="text-stone-400 size-6 shrink-0" />
                      )}

                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-stone-200">
                Tus tiendas
              </div>
              <ul role="list" className="-mx-2 mt-2 ">
                {teams.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={classNames(
                        location.pathname === team.href
                          ? "bg-yellow-500/5 text-yellow-600"
                          : "text-stone-400 hover:bg-stone-900",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                      )}
                    >
                      <span
                        className={classNames(
                          location.pathname === team.href
                            ? "border-yellow-600 text-yellow-600"
                            : "border-stone-800 text-stone-400 group-hover:border-yellow-600 group-hover:text-yellow-600",
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-stone-900 text-[0.625rem] font-black"
                        )}
                      >
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 hover:bg-stone-900"
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full bg-stone-50"
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true" className="text-sm text-stone-400">
                  Tom Cook
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
