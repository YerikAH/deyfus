import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import {
  DocumentTextIcon,
  SquaresPlusIcon,
  TruckIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { General, Measurement, Quantity, Sales } from "./components";

type Step = {
  id: number;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "General Information",
    icon: TruckIcon,
    content: <General />,
  },
  {
    id: 2,
    title: "Sales Information",
    icon: TagIcon,
    content: <Sales />,
  },
  {
    id: 3,
    title: "Quantity & Reorder",
    icon: SquaresPlusIcon,
    content: <Quantity />,
  },
  {
    id: 4,
    title: "Measurement",
    icon: DocumentTextIcon,
    content: <Measurement />,
  },
];

export default function CreateProduct() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button className="flex items-center text-stone-400 mb-8 text-sm">
          <ChevronLeftIcon className="size-4 mr-2" />
          Volver a productos
        </button>

        <div className="flex">
          <div className="w-1/3 pr-8 mt-[80px]">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                className={`flex items-center mb-2 w-full text-left px-4 py-4 rounded-lg 
                     ${
                       currentStep === step.id
                         ? "bg-stone-800"
                         : "bg-transparent  "
                     }`}
                onClick={() => handleStepClick(step.id)}
              >
                <step.icon
                  className={`size-5   ${
                    currentStep === step.id
                      ? "text-yellow-400"
                      : "text-stone-400"
                  }`}
                />
                <div className="flex flex-col ml-4">
                  <span className={`text-stone-600 text-xs font-black`}>
                    PASO {idx + 1}
                  </span>
                  <span
                    className={`text-sm text-stone-300    ${
                      currentStep === step.id
                        ? "text-yellow-400"
                        : "text-stone-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="w-3/4">
            <p className="text-center block text-stone-400 text-sm mb-2">
              Añadir nuevo producto
            </p>
            <h2 className="text-xl font-semibold mb-6 text-center text-stone-200">
              {steps[currentStep - 1].title}
            </h2>
            <div className="bg-stone-800 rounded-lg p-8">
              <form className="space-y-6">
                {steps[currentStep - 1].content}
              </form>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-stone-800 p-2">
          <div className="max-w-4xl mx-auto flex justify-end ">
            <div className="flex">
              <button className="px-6 py-2  text-yellow-400 text-sm border-yellow-400 border rounded-md mr-2">
                Guardar borrador
              </button>
              <div className="w-[1px] bg-stone-700 h-full"></div>
              {currentStep !== 1 && (
                <button
                  onClick={handlePrevious}
                  className="px-6 py-2 text-yellow-400 text-sm border-yellow-400 border rounded-md ml-2"
                >
                  Anterior
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-yellow-500 text-white rounded-md text-sm ml-2"
              >
                {currentStep === steps.length ? "Crear producto" : "Siguiente"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
