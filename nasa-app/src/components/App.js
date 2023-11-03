import { Route,Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <Account/>
        </Route>
        <Route exact path="/userprofile">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
