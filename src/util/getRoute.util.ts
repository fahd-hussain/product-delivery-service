import { KeyValueType } from "../type";

const getRoute = (route: string, obj: KeyValueType = {}) => {
  if (Object.keys(obj).length) {
    let objectKeys = Object.keys(obj);

    objectKeys.forEach(() => {
      route = route.replace(new RegExp(/:([\d\w])+/, "i"), (match) => {
        let formattedMatchedValue = match.slice(1);
        return obj[formattedMatchedValue];
      });
    });

    return route;
  }

  return route;
};

export default getRoute;