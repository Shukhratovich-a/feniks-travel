import queryString from "query-string";

import axios from "./axios";

import { ITour } from "@/interfaces/tour.interface";
import { IGetListOptions } from "@/interfaces/request.interface";

import { API } from "@/helpers/api.helper";

export const getList = (options?: IGetListOptions) => {
  const query = queryString.stringifyUrl({ url: API.tour.getList, query: { ...options } });

  return axios.get<{ tours: ITour[] }>(query);
};
