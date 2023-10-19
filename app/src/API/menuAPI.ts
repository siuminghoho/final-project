import { useQuery } from "@tanstack/react-query";

interface Menu {
  id: number;
  name: string;
  img: string;
}

export interface Food {
  name: string;
  price: number;
}
interface Subcat {
  id: number;
  name: string;
}

interface FoodOption {
  id: number;
  name: string;
  options: Array<{ id: number; name: string }>;
}

export function useMenu() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["Menu"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_SERVER}/index`);
      console.log(
        "REACT_APP_API_SERVER",
        process.env.REACT_APP_API_SERVER,
        res
      );
      try {
        const result = await res.json();
        return result as Menu[];
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

export function useFoodOption(setId: number) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["Subcat", setId],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/ieatwhat/showFoodoption?setId=${setId}`
      );
      console.log(
        "REACT_APP_API_SERVER",
        process.env.REACT_APP_API_SERVER,
        res
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
