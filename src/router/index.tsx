import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "../config";
import { useGetPermissionsQuery } from "../store/apiSlice/permissionSlice";
import RestrictedRoute from "./Restricted.routes";

const Layout = lazy(() => import("../layout").then());
const PageNotFount = lazy(() => import("../page/PageNotFound").then());

const LoginPage = lazy(() => import("../page/Authentication/LoginPage").then());

const AppRouter = () => {
  const { isLoading } = useGetPermissionsQuery();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            {!isLoading &&
              appRoutes.map(({ id, path, Component }) => (
                <Route key={id} element={<RestrictedRoute />}>
                  <Route path={path} element={<Component />} />
                </Route>
              ))}
          </Route>
          {!isLoading && <Route path="*" element={<PageNotFount />} />}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
