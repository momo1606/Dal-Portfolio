import { useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Loader } from "components";
import PublicRoutes from "routes/PublicRoutes";
import { useAuthWatchdog } from "hooks";

const Routes = () => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  const afterLogin = useCallback(() => {
    setRefresh((old) => old + 1);
    setLoading(false);
  }, []);

  const afterLogout = useCallback(() => {
    setRefresh((old) => old + 1);
    setLoading(false);
  }, []);

  useAuthWatchdog(afterLogin, afterLogout);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <PublicRoutes key={refresh} />
    </BrowserRouter>
  );
};
export default Routes;
