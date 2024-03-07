import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import logo from "../../assets/icon.png"
const Sidebar = () => {
  const urlActual = useLocation().pathname;
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <img src={logo} alt="logo" className="w-[60%] m-auto mb-2" />
        <p className="uppercase text-white text-xl text-center font-bold tracking-wide">
          FCA Restaurant
        </p>

        <p className="mt-3 text-gray-600">
          Administra tu restaurant en las siguientes opciones:
        </p>

        <nav className="mt-10">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
                : "text-gray-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
            }
            end
            to="/menu"
            onClick={() => {
              if (user?.email === "empleado@user.com") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "No tienes acceso a esta ruta!",
                  footer:
                    '<a href="#">No puedes ingresar con este usuario!</a>',
                });
              }
            }}
          >
            Menú
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
                : "text-gray-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
            }
            to="/ordenes"
          >
            Ordenes
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
                : "text-gray-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
            }
            to="/ordenes-completadas"
            onClick={() => {
              if (user?.email === "empleado@user.com") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "No tienes acceso a esta ruta!",
                  footer:
                    '<a href="#">No puedes ingresar con este usuario!</a>',
                });
              }
            }}
          >
            Ordenes Completadas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
                : "text-gray-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
            }
            to="/reportes"
            onClick={() => {
              if (user?.email === "empleado@user.com") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "No tienes acceso a esta ruta!",
                  footer:
                    '<a href="#">No puedes ingresar con este usuario!</a>',
                });
              }
            }}
          >
            Reportes
          </NavLink>
          <NavLink
            className="text-gray-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
            to="/"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  navigate("/");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Cerrar Sesión
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
