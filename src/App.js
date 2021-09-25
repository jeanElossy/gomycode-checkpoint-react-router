import MovieList from './components/MovieList';
import { Switch, Route } from 'react-router-dom';
import Description from './components/Description';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import {useState, useEffect} from "react";
import ReactStars from "react-rating-stars-component";
import NavBar from "./components/NavBar";

const App = () => {

  const etoiles = <ReactStars />;
  const [loader, setLoader] = useState(true);
  const [films, setFilms] = useState(
    [
      {
        id: 1,
        title: "Prison breack",
        description: "SEASON 6 ep 1",
        urlFilm: "https://youtu.be/WiiUWzs0Uow",
        urlPoster: "https://sortie.news/wp-content/uploads/2020/09/maxresdefault-37.jpg",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/aO80CHmWO5g"
      },
      {
        id: 2,
        title: "24h chrono",
        description: "Saison 9 episode 1 en français",
        urlFilm: "https://youtu.be/ySnnGNxL8Jg",
        urlPoster: "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/25/4f272919dc33902ce1be2e3694a26d92074cbc13.png",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/l4jNsOAsAY8"
      },
      {
        id: 3,
        title: "Cult Jet Li",
        description: "Film complet en français",
        urlFilm: "https://youtu.be/rFdktk41OMg",
        urlPoster: "https://lobservateur.info/uploads/imported_images/uploads/2018/05/Jet-Li.jpg",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/HgE_3fJI2es"
      },
      {
        id: 4,
        title: "Spider-Man 2",
        description: "Reveal Trailer",
        urlFilm: "https://youtu.be/sAKe9OI3Cog",
        urlPoster: "https://www.journaldugeek.com/content/uploads/2019/05/spiderman.jpg",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/6y6MR-sFslU"
      },
      {
        id: 5,
        title: "Les milliardaires",
        description: "FILM NIGERIAN EN FRANCAIS FILM AFRICAINE",
        urlFilm: "https://youtu.be/B-CqNvg5auE",
        urlPoster: "https://sodasandpopcorn.ng/wp-content/uploads/2021/03/Billionaires-Club-1.jpg",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/Qh8LQUDEbyc"
      },
      {
        id: 6,
        title: "Sniper",
        description: "Films d'action drama americain complet en français film 2016",
        urlFilm: "https://youtu.be/0Q5gx4EQvG0",
        urlPoster: "https://fr.web.img5.acsta.net/r_1920_1080/pictures/16/06/02/16/09/189675.jpg",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/4P6-TMgrDXg"
      },
      {
        id: 7,
        title: "Hotel Rawanda",
        description: "Role of Peace Keeping forces of UN",
        urlFilm: "https://youtu.be/tbjdbsvMz2A",
        urlPoster: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop455/public/medias/2008/02/media_25457/M5808.jpg?itok=KNuk1aX0",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/6Vnu5U1f17U"
      },
      {
        id: 8,
        title: "Terminator 3",
        description: "Open Matte film robotique",
        urlFilm: "https://youtu.be/hSZkU9Yyp0w",
        urlPoster: "https://imgr.cineserie.com/2019/03/terminator-6-on-connait-le-titre-officiel-2.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1",
        rating: etoiles,
        linkAnnouncement: "https://youtu.be/HsWlgInAdu0"
      }
    ]
  );

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1500)
  }, []);
  
  return  loader ? (
    <Loading />
  ) : (
    <>
      <NavBar />

      
      <Switch>
        <Route exact path="/dashbord" component={MovieList} />
        <Route exact path="/description/:id" render={(props) => <Description data={films} {...props}/>} />
        <Route path="*" component={NotFound}/>
      </Switch> 
      
      

    </>  
  );
}
export default App;
