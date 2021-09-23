import MovieList from './components/MovieList';
import { Switch, Route } from 'react-router-dom';
import Description from './components/Description';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import {useState, useEffect} from "react";


const App = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1500)
  }, []);
  
  return  loader ? (
    <Loading />
  ) : (
    <Switch>
      <Route exact path="/home" component={MovieList}/>
      <Route path="/home/:slug" component={Description}/>
      <Route component={NotFound}/>
    </Switch>    
  );
}

export default App;
