import Base from '../components/Base.js';
import HomePage from '../components/HomePage.js';
import DashboardPage from '../components/DashboardPage.js';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
        path: '/play',
        component: DashboardPage
    }
  ]
};

export default routes;
