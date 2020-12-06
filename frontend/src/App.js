import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//componets
import ContainerLayout from './components/layout/ContainerLayout';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <ContainerLayout>
        {/* Header */}
        <Header />
        {/* Container */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* Footer */}
        <Footer />
      </ContainerLayout>
    </Router>
  );
};

export default App;
