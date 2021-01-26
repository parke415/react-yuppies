import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import * as yuppiesAPI from '../../utilities/yuppies-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [yuppies, setYuppies] = useState([]);

  useEffect(function() {
    async function getYuppies() {
      const yuppies = await yuppiesAPI.getAll();
      setYuppies(yuppies);
    }
    getYuppies();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/orders/new">
                <NewOrderPage yuppies={yuppies}/>
              </Route>
              <Route path="/orders">
                <OrderHistoryPage />
              </Route>
              <Redirect to="/orders" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
