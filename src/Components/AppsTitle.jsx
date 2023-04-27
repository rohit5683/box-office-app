import styled from 'styled-components';

const AppsTitle = props => {
  const {
    title = 'Box Office',
    subtitle = 'Are you searching for a Movie or Actors',
  } = props;
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default AppsTitle;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
