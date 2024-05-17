import {Routes,Route} from "react-router-dom"
import Home from  "./Component/Home"
import Trending from "./Component/Trending"
import Popular from "./Component/Popular"
import Movie from "./Component/Movie"
import TvShow from "./Component/TvShow"
import Person from "./Component/Person"
import MovieDetails from "./Component/MovieDetails"
import TvDetails from "./Component/TvDetails"
import PersonDetails from "./Component/PersonDetails"
import Trailer from "./Component/partials/Trailer"
import PagenotFound from "./Component/PagenotFound"




function App() {


  return (
    <div className="w-screen h-screen  flex ">

      <Routes>

        <Route path= "/" element = {<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/tv" element={<TvShow/>} />
        <Route path="/person" element={<Person/>} />

        <Route path='/movie/details/:id' element={<MovieDetails/>} >

          <Route path="/movie/details/:id/trailer" element= {<Trailer/>} />

        </Route>

        <Route path="/tv/details/:id" element={<TvDetails/>} >

          <Route path="/tv/details/:id/trailer" element= {<Trailer/>} />

        </Route>

        <Route path="/person/details/:id" element={<PersonDetails/>}  />

        <Route path="*" element={<PagenotFound/>} />







      </Routes>




    </div>
  )
}

export default App
