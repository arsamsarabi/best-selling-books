import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:3000/",
});

export const fetchBookLists = async (): Promise<any> => {
  const { data } = await api.get("books");
  return data;
};
