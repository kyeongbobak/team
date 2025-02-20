import axios from "axios";

export const apiGet = async <R>(url: string): Promise<R | undefined> => {
  try {
    const { data } = await axios.get<R>(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPost = async <T, R>(url: string, body: T): Promise<R | undefined> => {
  try {
    const { data } = await axios.post<R>(url, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};
