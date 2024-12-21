import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

interface Props {
  name: string;
  category: string;
  isSerializedProduct: boolean;
  stock: number;
  retailPrice: number;
  wholesalePrice: number;
  imageUrl: string;
}

export const CardProduct: React.FC<Props> = ({
  name,
  category,
  isSerializedProduct,
  stock,
  retailPrice,
  wholesalePrice,
  imageUrl,
}) => {
  return (
    <div className="bg-stone-800 text-stone-100 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={imageUrl}
          alt={name}
          className="size-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="text-sm text-stone-400 flex items-center space-x-2 mt-2">
            <span>{category}</span>

            {isSerializedProduct && (
              <>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-stone-400"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <span className="bg-stone-700 text-xs px-1 py-0.5 rounded">
                  Producto serializado
                </span>
              </>
            )}
            <svg
              width={3}
              height={3}
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="fill-stone-400"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <span className="text-stone-200">{stock} en stock</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-6 border-l border-l-stone-700 px-6">
        <div>
          <div className="text-xs text-stone-400">PRECIO TRABAJADO</div>
          <div className="font-semibold mt-2">${retailPrice.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs text-stone-400">PRECIO REAL</div>
          <div className="font-semibold mt-2">${wholesalePrice.toFixed(2)}</div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <EllipsisVerticalIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};
