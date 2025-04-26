import { useCallback, useEffect, useState } from "react";

async function sendHTTPRequest(url, config) {
  const response = await fetch(url, config);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Failed to load data...");
  }

  return result;
}

export function useHTTP(url, config, initialValue) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function clearData() {
    setData(initialValue);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);

      try {
        const result = await sendHTTPRequest(url, { ...config, body: data });
        setData(result);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);

  return { data, error, isLoading, sendRequest, clearData };
}
