import { useEffect } from "react";
import ApexCharts from "apexcharts";

const options = {
  chart: {
    height: "300px",
    maxWidth: "100%",
    type: "line",
    fontFamily: "Merriweather, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
    enabled: true,
    x: {
      show: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  series: [
    {
      name: "Cajarmarca",
      data: [
        1350, 1456, 1300, 1256, 1489, 1324, 1401, 1290, 1423, 1345, 1411, 1478,
        1380, 1309, 1412,
      ],
      color: "#84cc16",
    },
    {
      name: "Open Plaza",
      data: [
        1412, 1432, 1254, 1480, 1375, 1209, 1490, 1330, 1475, 1268, 1399, 1389,
        1432, 1288, 1349,
      ],
      color: "#22c55e",
    },
  ],
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
      "08 Feb",
      "09 Feb",
      "10 Feb",
      "11 Feb",
      "12 Feb",
      "13 Feb",
      "14 Feb",
      "15 Feb",
    ],
    labels: {
      show: true,
      style: {
        fontFamily: "Merriweather, sans-serif",
        cssClass: "text-xs font-normal fill-stone-500 dark:fill-stone-400",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        fontFamily: "Merriweather, sans-serif",
        cssClass: "text-xs font-normal fill-stone-500 dark:fill-stone-400",
      },
    },
  },
};

export const LineChart = () => {
  useEffect(() => {
    if (
      document.getElementById("line-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("line-chart"),
        options
      );
      chart.render();
    }
  }, []);

  return (
    <div className="px-2 py-4 rounded-xl w-full  bg-white/[0.02] mt-10">
      <div className="px-2 flex items-center justify-between">
        <h2 className="text-lg font-black text-stone-400">
          Actividad de ventas
        </h2>
        <div className="flex flex-col justify-end items-end">
          <select
            id="location"
            name="location"
            defaultValue="Canada"
            className="mt-2 block w-full max-w-52 rounded-md border-0 py-1.5 pl-3 pr-10 text-stone-200 ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-yellow-600 sm:text-sm sm:leading-6 bg-stone-900"
          >
            <option>Filtrar por mes</option>
            <option>Filtrar por semana</option>
            <option>Filtrar por año</option>
          </select>
          <div className="mt-4 flex gap-4 items-center">
            <span className="flex items-center gap-2 text-sm text-stone-400">
              <span className="size-4 bg-lime-600 rounded-full flex justify-center items-center ">
                <span className="size-2 bg-stone-800 rounded-full"></span>
              </span>
              Open Plaza
            </span>
            <span className="flex items-center gap-2 text-sm text-stone-400">
              <span className="size-4 bg-green-500 rounded-full flex justify-center items-center ">
                <span className="size-2 bg-stone-800 rounded-full"></span>
              </span>
              Cajamarca
            </span>
          </div>
        </div>
      </div>
      <div id="line-chart" className="mt-8 lg:h-[300px]"></div>
    </div>
  );
};
