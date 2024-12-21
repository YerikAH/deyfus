import { useEffect } from "react";
import ApexCharts from "apexcharts";

const options = {
  colors: ["#1c1917"],
  series: [
    {
      name: "Organic",
      color: "#292524",
      data: [
        { x: "Ene", y: 12000 },
        { x: "Feb", y: 7800 },
        { x: "Mar", y: 6220 },
        { x: "Abr", y: 9021 },
        { x: "May", y: 11122 },
        { x: "Jun", y: 9023 },
        { x: "Jul", y: 6211 },
        { x: "Ago", y: 7031 },
        { x: "Sep", y: 9022 },
        { x: "Oct", y: 8622 },
        { x: "Nov", y: 9992 },
        { x: "Dic", y: 14222 },
      ],
    },
  ],

  chart: {
    type: "bar",
    height: "300px",
    fontFamily: "Merriweather , sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      borderRadius: 7,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Merriweather, sans-serif",
    },
    theme: "dark",
  },
  states: {
    normal: {
      filter: {
        type: "lighten",
        value: 0.2,
      },
    },
    hover: {
      filter: {
        type: "lighten",
        value: 0.6,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "lighten",
        value: 0.6,
      },
    },
  },

  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Merriweather, sans-serif",
        cssClass:
          "text-xs font-normal fill-stone-500 dark:fill-stone-400 font-sans",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        fontFamily: "Merriweather, sans-serif",
        cssClass:
          "text-xs font-normal fill-stone-500 dark:fill-stone-400 font-sans",
      },
    },
  },
  fill: {
    opacity: 1,
  },
};

export const BarChart = () => {
  useEffect(() => {
    if (
      document.getElementById("bar-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("bar-chart"),
        options
      );
      chart.render();
    }
  }, []);

  return (
    <div className="px-2 py-4 rounded-xl w-full lg:h-[450px] bg-white/[0.02]">
      <div className="px-2 flex items-start justify-between">
        <div>
          <h2 className="text-stone-400 text-lg font-black">Balance</h2>
          <div className="flex">
            <span className="text-stone-500 text-sm">s/</span>
            <h3 className="text-stone-100 text-3xl font-black">50.000.000</h3>
          </div>
        </div>
        <select
          id="location"
          name="location"
          defaultValue="Canada"
          className="mt-2 block w-full max-w-52 rounded-md border-0 py-1.5 pl-3 pr-10 text-stone-200 ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-yellow-600 sm:text-sm sm:leading-6 bg-stone-900"
        >
          <option>Mostrar último mes</option>
          <option>Mostrar última semana</option>
          <option>Mostrar último año</option>
        </select>
      </div>
      <div id="bar-chart" className="mt-8"></div>
    </div>
  );
};
