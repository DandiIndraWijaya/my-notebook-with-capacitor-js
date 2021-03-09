import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Index from './pages/Index/Index';
import Todos from './pages/Todos/Todos';

const Routes = () => {
  const location = useLocation();
  return (
    <SlideRoutes
      pathList={['todos', '/']}
      location={location}
      duration={500}
    >
      <Route exact path="/" component={Index} />
      <Route path="/todos" component={Todos} />
    </SlideRoutes>
  );
};

export default Routes;
