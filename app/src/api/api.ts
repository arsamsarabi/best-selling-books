import { create } from "apisauce";

const api = create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://nyt-bsb-backend.herokuapp.com/",
});

export const fetchBookLists = async (): Promise<any> => {
  const { data } = await api.get("books");
  return data;
};
