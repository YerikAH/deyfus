import { classNames } from "@/utils";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.png";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
export const SidebarMobile: React.FC<Props> = ({
  setSidebarOpen,
  sidebarOpen,
  navigation,
  teams,
}) => (
  <Dialog
    open={sidebarOpen}
    onClose={setSidebarOpen}
    className="relative z-50 lg:hidden"
  >
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-stone-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
    />

    <div className="fixed inset-0 flex">
      <DialogPanel
        transition
        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
      >
        <TransitionChild>
          <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="-m-2.5 p-2.5"
            >
              <span className="sr-only">Close sidebar</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
            </button>
          </div>
        </TransitionChild>
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-stone-950 px-6 pb-2">
          <div className="flex h-16 shrink-0 items-center">
            <img alt="Deyfus" src={logo} className="h-8 w-auto" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
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
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-stone-200">
                  Your teams
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
            </ul>
          </nav>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
);
