import { useQuery } from "@tanstack/react-query";

interface Menu {
  id: number;
  title: string;
  img: string;
}

export function useMenu() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["Menu"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_SERVER}/todo/items`);
      const result = await res.json();
      return result.data as Menu[];
    },
  });

  if (isLoading || isFetching || error || !data) {
    return [];
  }

  return data;
}
