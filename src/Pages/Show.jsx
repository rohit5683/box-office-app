import { useParams } from 'react-router-dom';
import { getShowById } from './api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/Shows/ShowMainData';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import Cast from '../Components/Shows/Cast';
import { Link } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <div>We have an Error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <Link to="/">Back</Link>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h1>Details</h1>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
          <div>
            <h2>Seasons</h2>
            <Seasons seasons={showData._embedded.seasons} />
          </div>
          <div>
            <h2>Cast </h2>
            <Cast cast={showData._embedded.cast} />
          </div>
        </div>
      </div>
    );
  }

  return <div>Data is loading {showId}</div>;
};

export default Show;
