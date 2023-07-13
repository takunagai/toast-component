import React from "react";

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    if (!id || !toasts.length) return;
    const nextToasts = toasts?.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
        dismissAllToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
