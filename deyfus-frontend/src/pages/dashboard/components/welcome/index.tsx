import { formatCurrentDate } from "@/utils";
import { PlusIcon } from "@heroicons/react/24/outline";

export const Welcome = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-stone-300 font-black text-lg">Hola, Cindy</h2>
        <h3 className="text-stone-500 text-base">{formatCurrentDate()}</h3>
      </div>
      <button
        type="button"
        className="rounded-md bg-stone-800 px-3 py-2 text-sm font-semibold text-stone-200  flex items-center gap-2 shadow-sm hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
      >
        <PlusIcon className="size-5" />
        Crear producto
      </button>
    </div>
  );
};
