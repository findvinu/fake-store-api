import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import ModalDialogContextProvider from "./store/ModalDialogContextProvider";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NewUser from "./components/Login/NewUser";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  const isNewUser = location.pathname === "/new-user";

  return (
    <div className="App">
      {!isAuth ? (
        <div className="loginBg">{!isNewUser ? <Login /> : <NewUser />}</div>
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
