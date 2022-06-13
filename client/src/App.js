import Account from "./components/Account/Account";
import SingIn from "./components/SignIn/SingIn";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

import { Route, Routes } from "react-router-dom";
import SingUp from "./components/SingUp/SingUp";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Firebase Auth & Context</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SingIn />}></Route>
          <Route path="/signup" element={<SingUp />}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <Todos />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
