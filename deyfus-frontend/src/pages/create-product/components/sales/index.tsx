export const Sales = () => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="price" className="block text-sm font-medium mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          className="w-full bg-gray-700 rounded-md px-4 py-2"
          placeholder="0.00"
        />
      </div>
      <div>
        <label htmlFor="costPrice" className="block text-sm font-medium mb-2">
          Cost Price
        </label>
        <input
          type="number"
          id="costPrice"
          className="w-full bg-gray-700 rounded-md px-4 py-2"
          placeholder="0.00"
        />
      </div>
      <div>
        <label htmlFor="taxRate" className="block text-sm font-medium mb-2">
          Tax Rate
        </label>
        <select
          id="taxRate"
          className="w-full bg-gray-700 rounded-md px-4 py-2"
        >
          <option>Select tax rate</option>
        </select>
      </div>
    </div>
  );
};
