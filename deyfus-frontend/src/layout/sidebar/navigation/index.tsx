import { Bars2Icon } from "@heroicons/react/24/outline";

interface Props {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Navigation: React.FC<Props> = ({ setSidebarOpen }) => (
  <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-stone-950 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
    <button
      type="button"
      onClick={() => setSidebarOpen(true)}
      className="-m-2.5 p-2.5 text-stone-200 lg:hidden"
    >
      <span className="sr-only">Open sidebar</span>
      <Bars2Icon aria-hidden="true" className="h-6 w-6" />
    </button>
    <div className="flex-1 text-sm font-semibold leading-6 text-stone-200">
      Dashboard
    </div>
    <a href="#">
      <span className="sr-only">Your profile</span>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="h-8 w-8 rounded-full bg-gray-50"
      />
    </a>
  </div>
);
