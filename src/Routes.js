import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Index from './pages/Index/Index';
import Schedules from './pages/Schedules/Schedules';

const Routes = () => {
  const location = useLocation();
  return (
    <SlideRoutes
      pathList={['schedules', '/']}
      location={location}
      duration={500}
    >
      <Route exact path="/" component={Index} />
      <Route path="/schedules" component={Schedules} />
    </SlideRoutes>
  );
};

export default Routes;
