import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, NavLink, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import * as yuppiesAPI from '../../utilities/yuppies-api';
import YuppieList from '../../components/YuppieList/YuppieList';
import AddYuppiePage from '../AddYuppiePage/AddYuppiePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [yuppies, setYuppies] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function getYuppies() {
      const yuppies = await yuppiesAPI.getAll();
      setYuppies(yuppies);
    }
    getYuppies();
  }, []);

  useEffect(() => {
    history.push("/")
  }, [yuppies, history])

  async function handleAddYuppie(newYuppieData) {
    const newYuppie = await yuppiesAPI.create(newYuppieData);
    setYuppies([...yuppies, newYuppie]);
  }

  async function handleUpdateYuppie(updatedYuppieData) {
    const updatedYuppie = await yuppiesAPI.update(updatedYuppieData);
    const newYuppies = yuppies.map(yuppie => {
      return yuppie._id === updatedYuppie._id ? updatedYuppie : yuppie
    });
    setYuppies(newYuppies);
  }

  async function handleDeleteYuppie(yuppieID) {
    await yuppiesAPI.deleteOne(yuppieID);
    setYuppies(yuppies.filter(yuppie => yuppie._id !== yuppieID));
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/yuppies/new">
                <AddYuppiePage handleAddYuppie={handleAddYuppie} />
              </Route>
              <Route path="/yuppies">
                <YuppieList yuppies={yuppies} />
              </Route>
              <Redirect to="/yuppies" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
