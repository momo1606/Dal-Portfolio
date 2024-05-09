import { createContext, useContext, useState } from "react";

const ToastContext = createContext<any>(null);

export function useToast() {
  return useContext(ToastContext);
}

export const ToastProvider = ({ children }: any) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const show = (message: string, severity: string) => {
    setToast({ open: true, message, severity });
  };

  const showSuccess = (message: string) => {
    show(message, "success");
  };

  const showError = (message: string) => {
    show(message, "error");
  };

  const showInfo = (message: string) => {
    show(message, "info");
  };

  const showWarning = (message: string) => {
    show(message, "warning");
  };

  const hideToast = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <ToastContext.Provider
      value={{
        ...toast,
        showSuccess,
        showError,
        showInfo,
        showWarning,
        hideToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
