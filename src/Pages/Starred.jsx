import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../Lib/useStarredShows';
import { getShowByIds } from './api/tvmaze';
import ShowGrid from '../Components/Shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <div> No Shows are Starred </div>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <div>Error Occured: {starredShowsError}</div>;
  }

  return <div>Shows are Loading</div>;
};

export default Starred;
