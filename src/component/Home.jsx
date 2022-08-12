import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator } from "../redux/reducer/actionCreators";
import { fetchFilm } from "../redux/slices/sliceFilms";

const Home = () => {
  const { films, loading, error } = useSelector((state) => state.films);
  const { people, loading: peopleLoading, error: peopleError } = useSelector((state) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilm());
    dispatch(actionCreator.getPeoples())
  }, []);

  if (loading || peopleLoading) return <h3>Loading...</h3>;
  if (error || peopleError) return <h3>{error}</h3>;
  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films &&
          films.map((film) => <li key={film.episode_id}>{film.title}</li>)}
      </ul>
      <h1>People</h1>
      <ul>
        {people &&
          people.map((person) => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  );
};

export default Home;
