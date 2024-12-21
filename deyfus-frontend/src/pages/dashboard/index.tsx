import { useEffect } from "react";
import {
  BarChart,
  LineChart,
  PieChart,
  Stats,
  Table,
  Welcome,
} from "./components/";
import { useTitle } from "@/hooks";

const products = [
  {
    ID: 1,
    Zapato: "Nike Air",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 120,
    Categoria: "Deportivo",
  },
  {
    ID: 2,
    Zapato: "Adidas Runner",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 130,
    Categoria: "Deportivo",
  },
  {
    ID: 3,
    Zapato: "Puma Classic",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 115,
    Categoria: "Casual",
  },
  {
    ID: 4,
    Zapato: "Reebok Fast",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 125,
    Categoria: "Deportivo",
  },
  {
    ID: 5,
    Zapato: "Vans Old Skool",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 100,
    Categoria: "Casual",
  },
  {
    ID: 6,
    Zapato: "Converse All Star",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 110,
    Categoria: "Casual",
  },
  {
    ID: 7,
    Zapato: "New Balance 574",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 135,
    Categoria: "Deportivo",
  },
  {
    ID: 8,
    Zapato: "Timberland Classic",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 150,
    Categoria: "Botas",
  },
  {
    ID: 9,
    Zapato: "Skechers Go Walk",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 90,
    Categoria: "Casual",
  },
  {
    ID: 10,
    Zapato: "Dr. Martens 1460",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 160,
    Categoria: "Botas",
  },
  {
    ID: 11,
    Zapato: "Under Armour HOVR",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 140,
    Categoria: "Deportivo",
  },
  {
    ID: 12,
    Zapato: "Fila Disruptor",
    Cuero: "Sintético",
    Tienda: "Cajamarca",
    Precio: 105,
    Categoria: "Casual",
  },
  {
    ID: 13,
    Zapato: "Jordan 1 Retro",
    Cuero: "Natural",
    Tienda: "Open Plaza",
    Precio: 180,
    Categoria: "Deportivo",
  },
  {
    ID: 14,
    Zapato: "Clarks Desert Boot",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 145,
    Categoria: "Botas",
  },
  {
    ID: 15,
    Zapato: "Hush Puppies Derby",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 110,
    Categoria: "Formal",
  },
  {
    ID: 16,
    Zapato: "ECCO Soft 7",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 155,
    Categoria: "Casual",
  },
  {
    ID: 17,
    Zapato: "ASICS Gel-Kayano",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 125,
    Categoria: "Deportivo",
  },
  {
    ID: 18,
    Zapato: "Salomon X Ultra",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 170,
    Categoria: "Botas",
  },
  {
    ID: 19,
    Zapato: "Mizuno Wave Rider",
    Cuero: "Sintético",
    Tienda: "Open Plaza",
    Precio: 130,
    Categoria: "Deportivo",
  },
  {
    ID: 20,
    Zapato: "North Face Hedgehog",
    Cuero: "Natural",
    Tienda: "Cajamarca",
    Precio: 160,
    Categoria: "Botas",
  },
];

function Dashboard() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Dashboard - Deyfus");
  }, []);
  return (
    <div className="mx-auto max-w-7xl w-full">
      <Welcome />
      <Stats />
      <div className="grid lg:grid-cols-[70%_25%] justify-between mt-10 lg:gap-[5%] w-full grid-cols-1">
        <BarChart />
        <PieChart />
      </div>
      <LineChart />
      <Table
        headers={["ID", "Zapato", "Cuero", "Tienda", "Precio", "Categoria"]}
        data={products}
        onlyRead
      />
    </div>
  );
}
export default Dashboard;
