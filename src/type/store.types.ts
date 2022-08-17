import {
  FetchArgs,
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { store } from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type BuilderType = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    any,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  >,
  string,
  "api"
>;
