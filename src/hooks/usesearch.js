import { useState, useRef, useEffect } from "react";


export function usesearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isTheFirstInput = useRef(true);

  useEffect(() => {
    console.log(search);

    if (isTheFirstInput.current) {
      isTheFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula solo con numeros");
      return;
    }
    if (search.length < 3) {
      setError("Nombre muy corto para buscar");
      return;
    }
    setError(null);
  }, [search]);

  return { search, error, updateSearch };
}
