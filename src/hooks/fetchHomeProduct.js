import { useEffect, useState } from "react";

const localProductList = [
  {
    id: "1A",
    title: "colorful furniture",
    price: "$100",
    path: require("../../assets/images/fn3.jpg"),
  },
  {
    id: "1B",
    title: "Comfy sofa",
    price: "$200",
    path: require("../../assets/images/fn2.jpg"),
  },
  {
    id: "1C",
    title: "Beautiful home furniture",
    price: "$500",
    path: require("../../assets/images/fn1.jpg"),
  },
];

const fetchHomeProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const timer = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Product 1", "Product 2", "Product 3", "Product 4");
        }, 2000);
        return () => clearTimeout(timer);
      });

      const result = await timer;
      setData(localProductList);

      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default fetchHomeProduct;
