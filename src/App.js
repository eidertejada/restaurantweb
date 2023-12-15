import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "./firebase";

import Ordenes from "./components/paginas/Ordenes";
import Menu from "./components/paginas/Menu";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import Sidebar from "./components/ui/Sidebar";
import OrdenesCompletadas from "./components/paginas/OrdenesCompletadas";
import Reportes from "./components/paginas/Reportes";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <div className="md:flex min-h-screen">
        <Sidebar />

        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" element={<Ordenes />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/nuevo-platillo" element={<NuevoPlatillo />}></Route>
            <Route
              path="/ordenes-completadas"
              element={<OrdenesCompletadas />}
            ></Route>
            <Route path="/reportes" element={<Reportes />}></Route>
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;