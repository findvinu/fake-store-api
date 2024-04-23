import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import ModalDialogContextProvider from "./store/ModalDialogContextProvider";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <ModalDialogContextProvider>
        <Layout />
      </ModalDialogContextProvider>
    </div>
  );
}

export default App;
