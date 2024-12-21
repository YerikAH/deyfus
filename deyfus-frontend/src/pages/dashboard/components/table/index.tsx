/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

interface Props {
  headers: string[];
  data: any[];
  onlyRead?: boolean;
}

export const Table = ({ headers, data, onlyRead }: Props) => {
  const navigate = useNavigate();

  const navigateTo = (id: string) => {
    if (onlyRead) return;
    navigate(id);
  };
  return (
    <div className="mt-10 bg-white/[0.02] rounded-xl px-8 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black text-stone-400">Últimas ventas</h2>

        <div className="relative max-w-72  w-full">
          <input
            id="search"
            name="search"
            type="text"
            required
            placeholder="Buscar..."
            className="block w-full bg-stone-900 pl-9 rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
          />
          <MagnifyingGlassIcon className="text-stone-400 absolute size-5 top-0 bottom-0 my-auto left-2" />
        </div>
      </div>
      <div className=" flow-root w-full mt-10">
        <div className=" -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full  py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full overflow-hidden rounded-xl">
              <thead className="bg-stone-800">
                <tr>
                  {headers.map((item, idx) => (
                    <th
                      scope="col"
                      key={idx}
                      className="px-3 py-3 text-left text-xs font-black uppercase tracking-wide text-stone-200"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-700 bg-transparent">
                {data.map((person, jdx) => (
                  <tr
                    key={person.id}
                    className="hover:bg-stone-800 transition-all cursor-pointer"
                    onClick={() => navigateTo(person.id)}
                  >
                    {Object.keys(person).map((item, idx) => (
                      <td
                        className={`whitespace-nowrap py-4  px-3 text-sm ${
                          idx === 0
                            ? "font-black text-stone-400"
                            : "text-stone-400"
                        }`}
                        key={idx}
                      >
                        {idx === 0 ? jdx + 1 : person[item]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
