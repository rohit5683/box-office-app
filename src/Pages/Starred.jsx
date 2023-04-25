import { useStarredShows } from '../Lib/useStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();
  return <div>Starred Page, Starred {starredShows.length}</div>;
};

export default Starred;
