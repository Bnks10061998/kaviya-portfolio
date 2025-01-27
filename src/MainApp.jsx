
import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import reacts from '@vitejs/plugin-react'
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
// import about from './components/about';
// import education from './components/education';
// import experiences from './components/experiences';
// import projects from './components/projects';
// import skills from './components/skills';
// import social from './components/Social';
import Routes from '../public/profile/routes.json';
import endpoints from './constants/endpoints';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
// import plugin from 'eslint-plugin-react';

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {Routes
              && Routes?.sections?.map((route) => {
                const SectionComponent = React.lazy(()=>import(`./components/${route.component}`))       
                return (
                  <Route
                  key={route.headerTitle}
                  path={route.path}
                  exact={route.exact || true}
                  render={(props) => <SectionComponent {...props} header={route.headerTitle} />}
                />
                );
              })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
