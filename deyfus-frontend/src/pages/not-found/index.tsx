import logo from "@/assets/logo.png";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <>
      <div className="grid h-screen grid-cols-1 grid-rows-[1fr,auto,1fr] bg-stone-900 lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <a href="#">
            <span className="sr-only">Deyfus</span>
            <img alt="" src={logo} className="h-10 w-auto sm:h-12" />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-3xl font-black leading-8 text-yellow-400">404</p>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-stone-200 sm:text-5xl">
              ¡Oops! No hay zapatos.
            </h1>
            <p className="mt-6 text-base leading-7 text-stone-400">
              No encontramos la sección que buscabas, pero no te preocupes, ¡los
              mejores zapatos siguen esperando por ti! Haz clic en el botón para
              volver al inventario y seguir explorando.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="text-sm font-semibold leading-7 bg-yellow-500 hover:bg-yellow-400 transition-all px-4 py-2 rounded-md w-fit flex items-center gap-2 text-stone-800"
              >
                <ArrowLeftIcon className="size-4" />
                Volver al inicio
              </a>
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-stone-800 bg-stone-950 py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-stone-400 lg:px-8">
              <a href="#">Contact support</a>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="h-0.5 w-0.5 fill-stone-700"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <a href="#">Status</a>
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            alt="shoes"
            src="https://images.pexels.com/photos/7887198/pexels-photo-7887198.jpeg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
