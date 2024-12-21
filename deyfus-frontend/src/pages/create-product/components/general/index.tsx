export const General = () => {
  return (
    <>
      <div className="flex items-center space-x-4 mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 bg-stone-800 border-stone-600 rounded focus:ring-yellow-600 "
          />
          <span className="ml-2 text-sm text-stone-400">
            Returnable product
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 rounded bg-stone-800 border-stone-600 focus:ring-yellow-600  "
          />
          <span className="ml-2 text-sm text-stone-400 ">Have variant</span>
        </label>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium mb-2 text-stone-500"
          >
            Nombre del producto
          </label>
          <input
            type="text"
            id="productName"
            className="block w-full bg-transparent rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
            placeholder="e.g. Cheese Burger"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="productType"
              className="block text-sm font-medium mb-2 text-stone-500"
            >
              Product Type
            </label>
            <select
              id="productType"
              className="block w-full bg-transparent rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
            >
              <option>Stocked product</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="productCategory"
              className="block text-sm font-medium mb-2 text-stone-500"
            >
              Product Category
            </label>
            <select
              id="productCategory"
              className="block w-full bg-transparent rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
            >
              <option>Select category</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="productSKU"
              className="block text-sm font-medium mb-2 text-stone-500"
            >
              Product SKU
            </label>
            <input
              type="text"
              id="productSKU"
              className="block w-full bg-transparent rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              placeholder="XXX-XXX-XX"
            />
          </div>
          <div>
            <label
              htmlFor="barcode"
              className="block text-sm font-medium mb-2 text-stone-500"
            >
              Barcode
            </label>
            <input
              type="text"
              id="barcode"
              className="block w-full bg-transparent rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              placeholder="XX-XXXXX"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2 text-stone-500"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="block w-full bg-transparent rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
            placeholder="Product description"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-stone-500">
            Images
          </label>
          {/* Add image upload functionality here */}
        </div>
      </div>
    </>
  );
};
