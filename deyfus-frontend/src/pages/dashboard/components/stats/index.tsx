import { classNames } from "@/utils";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

const stats = [
  {
    name: "Total Subscribers",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Open Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Click Rate",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];
export const Stats = () => {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-stone-800 overflow-hidden rounded-lg bg-white/[0.02] shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-stone-400">
              {item.name}
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-black text-stone-200">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-stone-500">
                  from {item.previousStat}
                </span>
              </div>

              <div
                className={classNames(
                  item.changeType === "increase"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400",
                  "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                  />
                ) : (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                  />
                )}

                <span className="sr-only">
                  {" "}
                  {item.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
