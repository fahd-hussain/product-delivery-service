import { EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { envConfig } from "../../config";
import { RootState } from "../../type/store.types";

const emptySplitApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: envConfig.env().API_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {      
      const store = getState() as RootState;
      const token = store.auth.accessToken;

      if (token) {
        headers.set("authentication", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default emptySplitApi;

export const injectGetItems = <T>(
  tag: string,
  route: string,
  adapter: EntityAdapter<T>
) => {
  const name = `get${tag}s`;

  const enhancedApi = emptySplitApi.enhanceEndpoints({ addTagTypes: [tag] });

  const initialData = adapter.getInitialState();

  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<EntityState<T>, void>({
        query: () => route,
        transformResponse: (response: any) => {
          return adapter.setAll(initialData, response);
        },
        providesTags: (result) =>
          result
            ? [
                ...result.ids.map((id) => ({ type: tag, id })),
                { type: tag, id: "LIST" },
              ]
            : [{ type: tag, id: "LIST" }],
      }),
    }),
  });

  return entityApi;
};

export const injectGetItem = <T>(
  tag: string,
  route: string,
  adapter: EntityAdapter<T>
) => {
  const name = `get${tag}`;
  const enhancedApi = emptySplitApi.enhanceEndpoints({ addTagTypes: [tag] });
  const initialState = adapter.getInitialState();
  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<EntityState<T>, string>({
        query: (id) => `${route}/${id}`,
        transformResponse: (response: any) => {
          return adapter.upsertOne(initialState, response);
        },
        providesTags: (result, error, id) => [{ type: tag, id }],
      }),
    }),
  });

  return entityApi;
};

export const injectAddItem = <T>(tag: string, route: string) => {
  const name = `add${tag}`;
  const enhancedApi = emptySplitApi.enhanceEndpoints({ addTagTypes: [tag] });

  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, T>({
        query: (body: T) => ({
          url: route,
          method: "POST",
          body,
        }),
        invalidatesTags: [{ type: tag, id: "LIST" }],
      }),
    }),
  });

  return entityApi;
};

export const injectUpdateItem = <T>(tag: string, route: string) => {
  const name = `update${tag}`;
  const enhancedApi = emptySplitApi.enhanceEndpoints({ addTagTypes: [tag] });

  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, any>({
        query: (body: { id: string; [x: string]: any }) => ({
          url: `${route}/${body.id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: (result, error, arg) => [{ type: tag, id: arg.id }],
      }),
    }),
  });

  return entityApi;
};

export const injectDeleteItem = <T>(tag: string, route: string) => {
  const name = `delete${tag}`;
  const enhancedApi = emptySplitApi.enhanceEndpoints({ addTagTypes: [tag] });

  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, string>({
        query: (id) => ({
          url: `${route}/${id}`,
          method: "DELETE",
          body: { id },
        }),
        invalidatesTags: (res, err, arg) => [{ type: tag, id: arg }],
      }),
    }),
  });

  return entityApi;
};
