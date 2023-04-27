import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../Lib/useStarredShows';
import { getShowByIds } from './api/tvmaze';
import ShowGrid from '../Components/Shows/ShowGrid';
import { TextCenter } from '../Components/Common/TextCenter';

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
    return <TextCenter> No Shows are Starred </TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <TextCenter>Error Occured: {starredShowsError}</TextCenter>;
  }

  return <TextCenter>Shows are Loading</TextCenter>;
};

export default Starred;
