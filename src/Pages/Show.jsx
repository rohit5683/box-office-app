import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from './api/tvmaze';
import { useState } from 'react';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    // getShowById().

    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }

    fetchData();
  }, [showId]);

  return { showData, showError };
};

const Show = () => {
  const { showId } = useParams();
  const { showData, showError } = useShowById(showId);

  if (showError) {
    return <div>We have an Error: {showError.message}</div>;
  }

  if (showData) {
    return <div>We got data: {showData.name}</div>;
  }

  return <div>Data is loading {showId}</div>;
};

export default Show;
