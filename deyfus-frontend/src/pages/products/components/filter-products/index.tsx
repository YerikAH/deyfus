import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import {
  BarsArrowDownIcon,
  BellAlertIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

type ProductStatus = "All" | "Active" | "Inactive" | "Draft";
type ProductType = "Retail" | "Wholesale";
type SortOption =
  | "Alphabetical A-Z"
  | "Alphabetical Z-A"
  | "Price Low to High"
  | "Price High to Low";

export const FilterProducts: React.FC = () => {
  const [productStatus, setProductStatus] = useState<ProductStatus>("All");
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("Alphabetical A-Z");
  const [stockAlert, setStockAlert] = useState("All stock");
  const [category, setCategory] = useState("All product");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleProductStatusChange = (status: ProductStatus) => {
    setProductStatus(status);
  };

  const handleProductTypeChange = (type: ProductType) => {
    setProductTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleResetFilters = () => {
    setProductStatus("All");
    setProductTypes([]);
    setSortBy("Alphabetical A-Z");
    setStockAlert("All stock");
    setCategory("All product");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <>
      <div>
        <h2 className="text-xs text-stone-400 font-semibold mb-2">
          ESTADO DEL PRODUCTO
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {(["All", "Active", "Inactive", "Draft"] as ProductStatus[]).map(
            (status) => (
              <button
                key={status}
                className={`py-3 px-3 text-sm rounded-md transition-all ${
                  productStatus === status
                    ? "bg-yellow-400 text-white"
                    : "bg-stone-800 text-gray-300"
                }`}
                onClick={() => handleProductStatusChange(status)}
              >
                {status} {status === "All" && "1708"}
                {status === "Active" && "1232"}
                {status === "Inactive" && "250"}
                {status === "Draft" && "36"}
              </button>
            )
          )}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xs text-stone-400 font-semibold mb-2">
          TIPO DE CUERO
        </h2>
        <div className="flex gap-2">
          {(["Retail", "Wholesale"] as ProductType[]).map((type) => (
            <button
              key={type}
              className={`py-2 px-4 text-sm rounded-md  ${
                productTypes.includes(type)
                  ? "bg-stone-800 border-2 border-yellow-400 text-white"
                  : "bg-stone-800 text-gray-300"
              }`}
              onClick={() => handleProductTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xs text-stone-400 font-semibold mb-2">
          ORDENAR POR
        </h2>
        <Menu as="div" className="relative">
          <Menu.Button className="w-full bg-transparent border border-stone-700 text-left px-3 py-2 rounded-md flex justify-between items-center text-sm text-stone-300">
            <span className="flex items-center gap-2">
              <BarsArrowDownIcon className="size-5 text-stone-600" />
              <span>{sortBy}</span>
            </span>
            <ChevronDownIcon className="size-5 text-stone-600" />
          </Menu.Button>
          <Menu.Items className="absolute z-10 w-full mt-1 bg-stone-700 overflow-hidden rounded-md shadow-lg">
            {[
              "Alphabetical A-Z",
              "Alphabetical Z-A",
              "Price Low to High",
              "Price High to Low",
            ].map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-stone-600" : ""
                    } w-full text-left px-3 py-2 text-sm text-stone-200 transition-all`}
                    onClick={() => setSortBy(option as SortOption)}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>

      <div className="mt-6">
        <h2 className="text-xs text-stone-400 font-semibold mb-2">
          ALERTA DE STOCK
        </h2>
        <Menu as="div" className="relative">
          <Menu.Button className="w-full bg-transparent border border-stone-700 text-left px-3 py-2 rounded-md flex justify-between items-center text-sm text-stone-300">
            <span className="flex items-center gap-2">
              <BellAlertIcon className="size-5 text-stone-600" />
              <span>{stockAlert}</span>
            </span>
            <ChevronDownIcon className="size-5 text-stone-600" />
          </Menu.Button>
          <Menu.Items className="absolute z-10 w-full mt-1 bg-stone-700 overflow-hidden rounded-md shadow-lg">
            {["All stock", "Low stock", "Out of stock"].map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-stone-600" : ""
                    } w-full text-left px-3 py-2 text-sm text-stone-200 transition-all`}
                    onClick={() => setStockAlert(option)}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>

      <div className="mt-6">
        <h2 className="text-xs text-stone-400 font-semibold mb-2">CATEGORIA</h2>
        <Menu as="div" className="relative">
          <Menu.Button className="w-full bg-transparent border border-stone-700 text-left px-3 py-2 rounded-md flex justify-between items-center text-sm text-stone-300">
            <span className="flex items-center gap-2">
              <TagIcon className="size-5 text-stone-600" />
              <span>{category}</span>
            </span>
            <ChevronDownIcon className="size-5 text-stone-600" />
          </Menu.Button>
          <Menu.Items className="absolute z-10 w-full mt-1 bg-stone-700 overflow-hidden rounded-md shadow-lg">
            {["All product", "Electronics", "Clothing", "Books"].map(
              (option) => (
                <Menu.Item key={option}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-stone-600" : ""
                      } w-full text-left px-3 py-2 text-sm text-stone-200 transition-all`}
                      onClick={() => setCategory(option)}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              )
            )}
          </Menu.Items>
        </Menu>
      </div>

      <div className="mt-6">
        <h2 className="text-xs text-stone-400 font-semibold mb-2">PRECIO</h2>

        <label htmlFor="" className="text-xs text-stone-500 mt-4 block">
          Precio minimo
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-stone-500 sm:text-sm">S/</span>
          </div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            aria-describedby="price-currency"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-stone-100 bg-transparent ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span id="price-currency" className="text-stone-400 sm:text-sm">
              PEN
            </span>
          </div>
        </div>

        <label htmlFor="" className="text-xs text-stone-500 mt-4 block">
          Precio máximo
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-stone-500 sm:text-sm">S/</span>
          </div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            aria-describedby="price-currency"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-stone-100 bg-transparent ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span id="price-currency" className="text-stone-400 sm:text-sm">
              PEN
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleResetFilters}
        className="w-full bg-transparent text-stone-300 text-sm font-black py-2 rounded-md flex items-center justify-center mt-10"
      >
        <ArrowPathIcon className="h-5 w-5 mr-2" />
        Reiniciar filtros
      </button>
    </>
  );
};
