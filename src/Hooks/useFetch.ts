import { useEffect, useState } from "react";


interface FetchState<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}


interface data {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
    
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}   



export function useFetch<T>(url: string): FetchState<T> {
    
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

 useEffect(() => {
   const fetchData = async () => {
       setLoading(true);
     try {
       const response = await fetch(url);
       const da: data = await response.json();

       console.log(da);
        setData(da.products);
       setLoading(false);
       console.log('before finally:', da);
     } catch (error) {
        setError(error);
       console.error('Error fetching data:', error);
     } finally {
       setLoading(false);
       console.log('after finally:', data);
     }
   }; 
   fetchData();  
},[url])
return { data, loading, error } as FetchState<T>;
}
