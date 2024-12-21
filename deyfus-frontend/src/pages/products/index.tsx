import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { CardProduct, FilterProducts } from "./components";

const products = [
  {
    name: "Nike Air Max 90",
    category: "Men Shoes",
    isSerializedProduct: true,
    stock: 100,
    retailPrice: 150.0,
    wholesalePrice: 120.0,
    imageUrl:
      "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png",
  },
  {
    name: "Puma RS-X3 Puzzle",
    category: "Women Shoes",
    isSerializedProduct: false,
    stock: 80,
    retailPrice: 200.0,
    wholesalePrice: 180.0,
    imageUrl:
      "https://images.pexels.com/photos/8069880/pexels-photo-8069880.jpeg",
  },
  {
    name: "Adidas Ultraboost 21",
    category: "Men Shoes",
    isSerializedProduct: true,
    stock: 150,
    retailPrice: 220.0,
    wholesalePrice: 200.0,
    imageUrl:
      "https://images.pexels.com/photos/9750571/pexels-photo-9750571.jpeg",
  },
  {
    name: "Reebok Classic Leather",
    category: "Unisex Shoes",
    isSerializedProduct: false,
    stock: 60,
    retailPrice: 120.0,
    wholesalePrice: 100.0,
    imageUrl:
      "https://images.pexels.com/photos/6766308/pexels-photo-6766308.jpeg",
  },
  {
    name: "New Balance 574",
    category: "Women Shoes",
    isSerializedProduct: true,
    stock: 90,
    retailPrice: 180.0,
    wholesalePrice: 150.0,
    imageUrl:
      "https://images.pexels.com/photos/7330204/pexels-photo-7330204.jpeg",
  },
  {
    name: "Vans Old Skool",
    category: "Men Shoes",
    isSerializedProduct: false,
    stock: 200,
    retailPrice: 110.0,
    wholesalePrice: 95.0,
    imageUrl:
      "https://images.pexels.com/photos/9241620/pexels-photo-9241620.jpeg",
  },
  {
    name: "Converse Chuck Taylor",
    category: "Unisex Shoes",
    isSerializedProduct: false,
    stock: 130,
    retailPrice: 75.0,
    wholesalePrice: 60.0,
    imageUrl:
      "https://images.pexels.com/photos/7926150/pexels-photo-7926150.jpeg",
  },
  {
    name: "Asics Gel-Kayano 27",
    category: "Men Shoes",
    isSerializedProduct: true,
    stock: 110,
    retailPrice: 240.0,
    wholesalePrice: 220.0,
    imageUrl:
      "https://images.pexels.com/photos/18523476/pexels-photo-18523476/free-photo-of-pair-of-brand-trainers.jpeg",
  },
  {
    name: "Skechers Go Walk",
    category: "Women Shoes",
    isSerializedProduct: false,
    stock: 50,
    retailPrice: 90.0,
    wholesalePrice: 70.0,
    imageUrl:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
  },
  {
    name: "Under Armour HOVR Sonic 3",
    category: "Men Shoes",
    isSerializedProduct: true,
    stock: 70,
    retailPrice: 210.0,
    wholesalePrice: 190.0,
    imageUrl:
      "https://images.pexels.com/photos/16799713/pexels-photo-16799713/free-photo-of-close-up-of-shoes-and-a-tie.jpeg",
  },
];

export default function Products() {
  return (
    <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[300px_auto] gap-10">
      <div>
        <div className="flex items-end justify-start gap-2">
          <h2 className="text-stone-100 text-3xl font-black">Productos</h2>
          <span className="text-sm rounded-md bg-stone-800 shadow text-stone-400 py-1 px-3">
            <b className="text-stone-100">1500</b> productos
          </span>
        </div>
        <div className="mt-10  bg-white/[0.02] rounded-xl p-4">
          <FilterProducts />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="relative w-full">
            <input
              id="search"
              name="search"
              type="text"
              required
              placeholder="Buscar producto..."
              className="block w-full bg-stone-900 pl-9 rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
            />
            <MagnifyingGlassIcon className="text-stone-400 absolute size-5 top-0 bottom-0 my-auto left-2" />
          </div>
          <span className="isolate inline-flex shadow-sm gap-2 border-r border-r-stone-800 pr-4">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md bg-white/[0.02] px-2 py-2 text-stone-400 ring-1 ring-inset hover:bg-stone-700 focus:z-10 ring-yellow-400 "
            >
              <span className="sr-only">Listas</span>
              <QueueListIcon
                aria-hidden="true"
                className="h-5 w-5 text-yellow-400"
              />
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center rounded-md bg-white/[0.02] px-2 py-2 text-stone-400 ring-1 ring-inset ring-stone-800 hover:bg-stone-700 focus:z-10"
            >
              <span className="sr-only">Cuadrados</span>
              <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
            </button>
          </span>
          <button
            type="button"
            className="rounded-md max-w-[150px] w-full justify-center bg-yellow-400 px-3 py-2 text-sm font-semibold text-stone-200  flex items-center gap-2 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
          >
            Crear producto
          </button>
        </div>
        <div className="mt-10 gap-2 grid">
          {products.map((item, idx) => (
            <CardProduct
              name={item.name}
              category={item.category}
              isSerializedProduct={item.isSerializedProduct}
              stock={item.stock}
              retailPrice={item.retailPrice}
              wholesalePrice={item.wholesalePrice}
              imageUrl={item.imageUrl}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
