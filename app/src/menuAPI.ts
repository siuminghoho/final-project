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
