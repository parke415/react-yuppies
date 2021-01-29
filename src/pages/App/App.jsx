import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import * as yuppiesAPI from '../../utilities/yuppies-api';
import YuppieListPage from '../YuppieListPage/YuppieListPage';
import AddYuppiePage from '../AddYuppiePage/AddYuppiePage';
import YuppieDetailPage from '../YuppieDetailPage/YuppieDetailPage';
import EditYuppiePage from "../EditYuppiePage/EditYuppiePage";

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
    const newYuppies = yuppies.map(yuppie => yuppie._id === updatedYuppie._id ? updatedYuppie : yuppie);
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
              <Route path="/yuppies">
                <YuppieListPage yuppies={yuppies} handleDeleteYuppie={handleDeleteYuppie} />
              </Route>
              <Route path="/new">
                <AddYuppiePage handleAddYuppie={handleAddYuppie} />
              </Route>
              <Route path="/details">
                <YuppieDetailPage />
              </Route>
              <Route path="/edit">
                <EditYuppiePage handleUpdateYuppie={handleUpdateYuppie} />
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
