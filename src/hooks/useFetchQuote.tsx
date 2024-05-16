/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import quotes from './data';

interface Quote {
  quote: string;
  author: string;
}

const useFetchQuote = (enabled: boolean) => {
  // TODO: Update state as per API response
  const [data, setData] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // TODO: Replace with API call
      setData(quotes);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  return {data, loading, error};
};

export default useFetchQuote;
