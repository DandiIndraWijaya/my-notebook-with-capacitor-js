import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Index from './pages/Index/Index';
import Todos from './pages/Todos/Todos';
import Schedule from './pages/Schedule/Schedule';
import About from './pages/About/About';
import Navigation from './components/Navigation/Navigation';

const Routes = () => {
  const location = useLocation();
  return (
    <div>
      <SlideRoutes
        pathList={['/todos', '/schedule', '/', '/about']}
        location={location}
        duration={500}
      >
        <Route exact path="/" component={Index} />
        <Route path="/todos" component={Todos} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/about" component={About} />
      </SlideRoutes>
      <Navigation />
    </div>

  );
};

export default Routes;
