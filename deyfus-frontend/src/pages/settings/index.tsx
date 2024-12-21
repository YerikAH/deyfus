import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Settings() {
  return (
    <form className="mx-auto max-w-2xl">
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-stone-100">
            Perfil del usuario
          </h2>
          <p className="mt-1 text-sm leading-6 text-stone-400">
            Esta información se mostrará públicamente, así que tenga cuidado con
            lo que comparte.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Ingresa tu nombre de usuario:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-500">
                  <span className="flex select-none items-center pl-3 text-stone-400 sm:text-sm">
                    deyfus.com/
                  </span>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="janesmith"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-stone-100 focus:ring-0 sm:text-sm sm:leading-6 placeholder:text-stone-400"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Ingresa tu descripción:
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  placeholder="Ej. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien et diam iaculis elementum vel sed arcu. Nullam in viverra metus. "
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-stone-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 placeholder:text-stone-400"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-400">
                Escribe un poco sobre tí.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Selecciona tu foto:
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  aria-hidden="true"
                  className="h-12 w-12 text-stone-400"
                />
                <button
                  type="button"
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-stone-100 shadow-sm hover:bg-white/20"
                >
                  Cambiar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-stone-100">
            Información personal
          </h2>
          <p className="mt-1 text-sm leading-6 text-stone-400">
            Utilice una dirección permanente donde pueda recibir correo.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Ingresa tu primer nombre:
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="Ej. Jorge"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-stone-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 placeholder:text-stone-400"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Ingreas tu apellido:
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  placeholder="Ej. Perez"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-stone-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 placeholder:text-stone-400"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Ingresa tu correo electrónico:
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@email.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-stone-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 placeholder:text-stone-400"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Ingresa tu dirección:
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  placeholder="Ej. Ica N°123, La Paz, Huancayo"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-stone-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 placeholder:text-stone-400"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="phomenumber"
                className="block text-sm font-medium leading-6 text-stone-100"
              >
                Ingresa tu número de celular:
              </label>
              <div className="mt-2">
                <input
                  id="phomenumber"
                  name="city"
                  type="text"
                  placeholder="Ej. +51 999 999 999 "
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-stone-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 placeholder:text-stone-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-stone-100"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-stone-100 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Guardar información
        </button>
      </div>
    </form>
  );
}
