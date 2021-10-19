import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from './context/UserProvider';
import './index.css';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home/Home';
import Login from './templates/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <UserProvider>
            <GlobalStyles />
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
          </UserProvider>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
