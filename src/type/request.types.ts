export interface RequestParams {
  url: string;
}

export interface PostRequestParams extends RequestParams {
  body: object;
}

export interface PatchRequestParams extends RequestParams {
  body: object;
}

export interface DeleteRequestParams extends RequestParams {
  body: object;
}
