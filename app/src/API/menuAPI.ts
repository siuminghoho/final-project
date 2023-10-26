import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Menu {
  id: number;
  name: string;
  menuimg: string;
}

export interface Food {
  id: number;
  name: string;
  price: number;
  img: string;
  itemObj: boolean;
}
interface Subcat {
  id: number;
  name: string;
}

export interface FoodOption {
  id: number;
  name: string;
  options: Array<{ id: number; name: string }>;
  priority: number;
  listName: string;
}

//這是home page
export function useMenu() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["Menu"],
    queryFn: async () => {
      // const res = await fetch(`${process.env.REACT_APP_API_SERVER}/index`);
      const res = await fetch(`${process.env.REACT_APP_API_SERVER}/index`);
      console.log(
        "REACT_APP_API_SERVER",
        process.env.REACT_APP_API_SERVER,
        res
      );
      try {
        const result = await res.json();
        console.log(result);
        return result as Menu[];
      } catch (err) {
        console.log(err);
        throw err as Error;
      }
      // const res = await axios.get(`${process.env.REACT_APP_API_SERVER}/index`);
      // const result = res.data;
      // console.log(result);
      // return result as Menu[];
    },
  });

  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}

//這是subcat 下所有food的資料
export function useSubcatMenu(menu_id: number, subcat_menu_name: string) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["SubcatMenu", menu_id, subcat_menu_name],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/subcat/menu_id/${menu_id}?name=${subcat_menu_name}`
      );
      console.log(
        "REACT_APP_API_SERVER",
        process.env.REACT_APP_API_SERVER,
        res
      );
      try {
        const result = await res.json();
        return result as Food[];
      } catch (err) {
        console.log(err);
        throw err as Error;
      }
    },
  });

  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}
//這是navbar subcat
export function useSubcat(menu_id: number) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["Subcat", menu_id],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/subcat/subcatname/menu_id/${menu_id}`
      );
      console.log(
        "REACT_APP_API_SERVER",
        process.env.REACT_APP_API_SERVER,
        res
      );
      try {
        const result = await res.json();
        return result as Subcat[];
      } catch (err) {
        console.log(err);
        throw err as Error;
      }
    },
  });

  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}

//這是subcat 內food的內容
export function useFoodOption(id: number, itemObj: boolean) {
  const param = itemObj ? "itemId" : "setId";
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["Subcat", id],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/ieatwhat/showFoodoption?${param}=${id}`
      );
      console.log(
        "REACT_APP_API_SERVER",
        process.env.REACT_APP_API_SERVER,
        res,
        "show id",
        id
      );
      try {
        const result = await res.json();
        return result as FoodOption[];
      } catch (err) {
        console.log(err);
        throw err as Error;
      }
    },
  });

  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}
