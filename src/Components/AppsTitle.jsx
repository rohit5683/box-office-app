const AppsTitle = props => {
  const {
    title = 'Box Office',
    subtitle = 'Are you searching for a Movie or Actors',
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default AppsTitle;
