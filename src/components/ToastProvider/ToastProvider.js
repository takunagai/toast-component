import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        keyId: crypto.randomUUID(),
        message,
        variant
      }
    ];

    setToasts(nextToasts);
  }

  function dismissToast(keyId) {
    const nextToasts = toasts.filter((toast) => {
      return toast.keyId !== keyId;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
        setToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
