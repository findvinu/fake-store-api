import Layout from "./components/Layout/Layout";
import ModalDialogContextProvider from "./store/ModalDialogContextProvider";

function App() {
  return (
    <div className="App">
      <ModalDialogContextProvider>
        <Layout />
      </ModalDialogContextProvider>
    </div>
  );
}

export default App;
