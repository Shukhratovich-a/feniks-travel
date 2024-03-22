import queryString from "query-string";

import axios from "./axios";

import { IDestination } from "@/interfaces/destination.interface";
import { IGetListOptions } from "@/interfaces/request.interface";

import { API } from "@/helpers/api.helper";

export const getList = (options?: IGetListOptions) => {
  const query = queryString.stringifyUrl({ url: API.destination.getList, query: { ...options } });

  return axios.get<IDestination[]>(query);
};
