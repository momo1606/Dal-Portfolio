import { Route, Routes } from "react-router-dom";

import { PrivateLayout } from "layout";
import { NotFoundPage } from "routes/components";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
