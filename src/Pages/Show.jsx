import { useParams } from 'react-router-dom';
import { getShowById } from './api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/Shows/ShowMainData';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import Cast from '../Components/Shows/Cast';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextCenter } from '../Components/Common/TextCenter';

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
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Back</Link>
        </BackHomeWrapper>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <InfoBlock>
          <h1>Details</h1>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
          <InfoBlock>
            <h2>Seasons</h2>
            <Seasons seasons={showData._embedded.seasons} />
          </InfoBlock>
          <InfoBlock>
            <h2>Cast </h2>
            <Cast cast={showData._embedded.cast} />
          </InfoBlock>
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Data is loading {showId}</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
