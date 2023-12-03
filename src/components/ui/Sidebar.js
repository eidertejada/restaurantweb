import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const urlActual = useLocation().pathname;

  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl text-center font-bold tracking-wide">
          RestaurantApp
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
            to="/"
          >
            Ordenes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
                : "text-gray-400 p-1 block hover:bg-yellow-500 hover:text-gray-900"
            }
            end
            to="/menu"
          >
            Menú
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
