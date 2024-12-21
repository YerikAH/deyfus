export const Measurement = () => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="weight" className="block text-sm font-medium mb-2">
          Weight (kg)
        </label>
        <input
          type="number"
          id="weight"
          className="w-full bg-gray-700 rounded-md px-4 py-2"
          placeholder="0.00"
        />
      </div>
      <div>
        <label htmlFor="dimensions" className="block text-sm font-medium mb-2">
          Dimensions (cm)
        </label>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Length"
            className="w-full bg-gray-700 rounded-md px-4 py-2"
          />
          <input
            type="number"
            placeholder="Width"
            className="w-full bg-gray-700 rounded-md px-4 py-2"
          />
          <input
            type="number"
            placeholder="Height"
            className="w-full bg-gray-700 rounded-md px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};
