import { Routes, Route, redirect, Navigate } from "react-router";
import { useNavigate } from "react-router";
import firebase, { FirebaseContext } from "./firebase";
import { getAuth } from "firebase/auth";
import Ordenes from "./components/paginas/ordenes";
import Menu from "./components/paginas/menu";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import Sidebar from "./components/ui/Sidebar";
import OrdenesCompletadas from "./components/paginas/OrdenesCompletadas";
import Reportes from "./components/paginas/Reportes";
import Login from "./components/paginas/login";


function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  /* console.log(user.email); */
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
            <Route path="/" element={<Login />}></Route>
            <Route
              path="/ordenes"
              element={user ? <Ordenes /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/menu"
              element={
                user?.email === "administracion@user.com" ? (
                  <Menu />
                ) : (
                  <Navigate to="/ordenes" />
                )
              }
            ></Route>
            <Route
              path="/nuevo-platillo"
              element={
                user?.email === "administracion@user.com" ? (
                  <NuevoPlatillo />
                ) : (
                  <Navigate to="/ordenes" />
                )
              }
            ></Route>
            <Route
              path="/ordenes-completadas"
              element={user?.email === "administracion@user.com" ? <OrdenesCompletadas /> : <Navigate to="/ordenes" />}
            ></Route>
            <Route
              path="/reportes"
              element={
                user?.email === "administracion@user.com" ? (
                  <Reportes />
                ) : (
                  <Navigate to="/ordenes" />
                )
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
