import MovieList from './components/MovieList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home"  component={MovieList}/>
        <Route exact path="/Description" component={Description}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
      
    
  );
}

export default App;
