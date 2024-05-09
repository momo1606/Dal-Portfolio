import { AppThemeProvider } from "theme";
import ErrorBoundary from "components/ErrorBoundary";
import Routes from "routes";
import AppStore from "store";
import { ToastProvider } from "hooks";
import Toast from "components/Toast";
import { Suspense } from "react";
import { Loader } from "components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <ErrorBoundary name="App">
          <ToastProvider>
            <AppStore>
              <AppThemeProvider>
                <Toast />
                <Routes />
              </AppThemeProvider>
            </AppStore>
          </ToastProvider>
        </ErrorBoundary>
      </LocalizationProvider>
    </Suspense>
  );
}

export default App;
