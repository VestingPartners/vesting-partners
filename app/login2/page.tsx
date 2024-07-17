import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Full-screen background image */}
      <Image
        src="/Vesting Partners.png"
        layout="fill"
        objectFit="cover"
        alt="Background"
        priority
        className="z-0"
      />

      {/* Centered login form with semi-transparent background */}
      <div className="z-10 w-full max-w-md px-6 py-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg">
        <div className="w-full max-w-md">
          <Image
            src="/vp.png"
            width={300}
            height={300} // Asegúrate de que estos valores mantienen la relación de aspecto de la imagen original
            alt="Logo de Capital Storage"
            className="mx-auto my-4 max-w-xs sm:max-w-sm md:max-w-md" // Ajusta las clases de tamaño máximo para diferentes pantallas
          />

          <div className="bg-white p-8 rounded-lg shadow-sm w-full">
            <h2 className="text-xl mb-6 text-center">
              Sign in with{" "}
              <span className="font-semibold text-[#25567c]">
                Vesting Partners
              </span>
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25567c] text-white py-2 px-4 rounded-md hover:bg-[#1e4569] transition duration-300"
              >
                Iniciar Sesion
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Cambia tu contraseña
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600 max-w-md">
            Bienvenido a Vesting Partners, el portal de inversionistas de
            Vesting. Este sitio web es de uso exclusivo para los actuales y
            potenciales inversionistas. Para más información o para solicitar
            acceso, por favor contacte a{" "}
            <a
              href="mailto:contacto@vestingpartners.cl"
              className="text-blue-600 hover:underline"
            >
              contacto@vestingpartners.cl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
