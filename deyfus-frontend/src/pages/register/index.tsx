import logo from "@/assets/logo.png";
import google from "@/assets/icons/google-icon.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useTitle } from "@/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "@/routes/routes";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { changeTitle } = useTitle();

  const togglePassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    changeTitle("Registrarse - Deyfus");
  }, []);
  return (
    <div className="flex bg-stone-900 h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img alt="Deyfus" src={logo} className="h-10 w-auto" />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-stone-50">
              Registrarse
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-400">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to={ROUTER.LOGIN}
                className="font-semibold text-yellow-500 hover:text-yellow-400"
              >
                Ingresar
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form className="space-y-6">
                <div className="flex items-center gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-stone-200"
                    >
                      Ingresa tu nombre:
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Ej. Jorge"
                        className="block w-full bg-stone-900 rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-stone-200"
                    >
                      Ingresa tu apellido:
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        required
                        autoComplete="cc-name"
                        placeholder="Ej. Perez"
                        className="block w-full bg-stone-900 rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-stone-200"
                  >
                    Ingresa tu correo electrónico:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Ej. email@email.com"
                      className="block w-full bg-stone-900 rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-stone-200"
                  >
                    Ingresa tu contraseña:
                  </label>
                  <div className="mt-2 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      placeholder="Ej. ABwe2$&hsA!"
                      className="block w-full bg-stone-900 rounded-lg border-0 py-2 text-stone-300  ring-1 ring-inset ring-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      className="absolute top-0 bottom-0 my-auto right-4"
                      onClick={togglePassword}
                    >
                      {showPassword ? (
                        <EyeIcon className="size-4 text-stone-500" />
                      ) : (
                        <EyeSlashIcon className="size-4 text-stone-500" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-stone-600 text-yellow-600 focus:ring-yellow-600 bg-stone-700"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-stone-500"
                    >
                      Recuerdame
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <a
                      href="#"
                      className="font-semibold text-yellow-600 hover:text-yellow-500"
                    >
                      ¿Olvistaste tu contraseña?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-lg bg-yellow-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full border-t border-stone-700" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-stone-900 px-6 text-stone-400">
                    O continua con
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-stone-800 px-3 py-2 text-sm font-semibold text-stone-100 shadow-sm ring-1 ring-inset ring-stone-700 hover:bg-stone-700 focus-visible:ring-transparent"
                >
                  <img className="size-4" alt="google" src={google} />
                  <span className="text-sm font-semibold leading-6">
                    Google
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          alt="banner"
          src="https://images.pexels.com/photos/6069084/pexels-photo-6069084.jpeg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
export default Register;
