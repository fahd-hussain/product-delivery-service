const appendQueryParams = (
  url: string,
  paramsObj: { [key: string]: any },
  multipleSymbol?: Array<any>
): string => {
  const params = Object.keys(paramsObj).map((key) => {
    if (Array.isArray(paramsObj[key])) {
      return paramsObj[key].map((paramsVal: string) => {
        return `${key}${multipleSymbol}=${paramsVal}`;
      });
    } else {
      return `${key}=${paramsObj[key]}`;
    }
  });

  return `${url}?${params.join("&")}`;
};

export default appendQueryParams;
