export const Quantity = () => {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="initialStock"
          className="block text-sm font-medium mb-2"
        >
          Initial Stock
        </label>
        <input
          type="number"
          id="initialStock"
          className="w-full bg-gray-700 rounded-md px-4 py-2"
          placeholder="0"
        />
      </div>
      <div>
        <label
          htmlFor="lowStockThreshold"
          className="block text-sm font-medium mb-2"
        >
          Low Stock Threshold
        </label>
        <input
          type="number"
          id="lowStockThreshold"
          className="w-full bg-gray-700 rounded-md px-4 py-2"
          placeholder="0"
        />
      </div>
    </div>
  );
};
