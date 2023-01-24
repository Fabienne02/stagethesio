import { FC, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import HomePage from "./HomePage/HomePage";
import DetailPage from "./DetailPage/DetailPage";
import WalletPage from "./Wallet/WalletPage";
import MyEventPage from "./Wallet/MyEventPage";

// Lazy load routes
const HomeLayout = lazy(() => import("./HomeLayout/HomeLayout"));

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />} path={AppRoutes.Home}>
        <Route element={<HomePage />} index />
      </Route>
      <Route element={<DetailPage />} path={AppRoutes.Detail} />
      <Route element={<WalletPage />} path={AppRoutes.Wallet} />
      <Route element={<MyEventPage />} path={AppRoutes.MyEvents} />
    </Routes>
  </BrowserRouter>
);

export default Router;
