import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppsTitle from './AppsTitle';

const MainLayout = () => {
  return (
    <div>
      <AppsTitle />
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;
