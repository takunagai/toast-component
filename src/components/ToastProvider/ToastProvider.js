import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  return (
    <ToastContext.Provider value={{ toasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
