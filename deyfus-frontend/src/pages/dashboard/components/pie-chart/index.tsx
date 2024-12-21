/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import ApexCharts from "apexcharts";

const values = [
  {
    name: "Cuero",
    percent: 40.2,
    color: "#fde047",
  },
  {
    name: "Sintetico",
    percent: 25.7,
    color: "#eab308",
  },
  {
    name: "Infantil",
    percent: 19.8,
    color: "#ca8a04",
  },
  {
    name: "Zapatillas",
    percent: 14.3,
    color: "#a16207",
  },
];

const getChartOptions = () => {
  return {
    series: [
      values[0].percent,
      values[1].percent,
      values[2].percent,
      values[3].percent,
    ],
    colors: [
      values[0].color,
      values[1].color,
      values[2].color,
      values[3].color,
    ],
    chart: {
      height: 250,
      width: "100%",
      type: "donut",
    },
    stroke: {
      curve: "smooth",
      colors: "#1c1917",
      lineCap: "round",
      width: 10,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Merriweather, sans-serif",
              offsetY: 20,
              color: "#a8a29e",
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              fontFamily: "Merriweather, sans-serif",
              color: "#a8a29e",
              fontSize: 14,
              formatter: function (w: any) {
                const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b;
                }, 0);
                return "$" + sum + "k";
              },
            },
            value: {
              show: true,
              fontFamily: "Merriweather, sans-serif",
              color: "#f5f5f4",
              offsetY: -20,
              fontSize: 30,
              fontWeight: 900,
              formatter: function (value: any) {
                return value + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    labels: [values[0].name, values[1].name, values[2].name, values[3].name],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: "Merriweather",
      },
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        formatter: function (value: string) {
          return value + "%";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value: string) {
          return value + "%";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
};

export const PieChart = () => {
  useEffect(() => {
    if (
      document.getElementById("pie-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("pie-chart"),
        getChartOptions()
      );
      chart.render();
    }
  }, []);
  return (
    <div className="px-2 py-4 rounded-xl  bg-white/[0.02] mt-10 lg:mt-0 ">
      <div className="mt-4" id="pie-chart"></div>
      <div className="mt-10 px-2 flex flex-col gap-2">
        {values.map((item, idx) => (
          <span
            className="grid grid-cols-[auto_1fr_auto] items-center justify-between gap-2"
            key={idx}
          >
            <p className="text-sm text-stone-400 w-20 block">{item.name}</p>
            <span className="w-full h-2 bg-stone-700 rounded-full block">
              <span
                className="w-[20%] h-2 block rounded-full"
                style={{
                  backgroundColor: item.color,
                  width: `${item.percent}%`,
                }}
              ></span>
            </span>
            <p className="text-sm text-stone-400">{item.percent}%</p>
          </span>
        ))}
      </div>
    </div>
  );
};
