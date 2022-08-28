import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import { appRoutes, authRoutes } from "../config";
import { useAppSelector } from "../hooks";
import Layout from "../layout";
import { getPermissions } from "../store/apiSlice/permissionSlice";
import PageNotFound from "../page/PageNotFound";
import RestrictedRoute from "./Restricted.routes";
import { store } from "../store";

const AppRouter = () => {
  const isAuthenticated = useAppSelector((store) => store.auth.isAuthenticated);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        setFetching(true);
        try {
          await store.dispatch(getPermissions.initiate()).unwrap();
        } catch (error) {
          toast.error("Somthing went wrong while fetching permissions.");
        }
        setFetching(false);
      }
    })();
  }, [isAuthenticated]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {!fetching &&
              appRoutes.map(({ path, Component, id }) => (
                <Route key={id} element={<RestrictedRoute />}>
                  <Route path={path} element={<Component />} />
                </Route>
              ))}
          </Route>
          {authRoutes.map(({ path, Component, id }) => (
            <Route path={path} element={<Component />} key={id} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
