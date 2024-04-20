import { createContext, useState } from "react";

export const OpenDialogContext = createContext();

const ModalDialogContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <OpenDialogContext.Provider value={{ open, handleClickOpen, handleClose }}>
      {children}
    </OpenDialogContext.Provider>
  );
};

export default ModalDialogContextProvider;
