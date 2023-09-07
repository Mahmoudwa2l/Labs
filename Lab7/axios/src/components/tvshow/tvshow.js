import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
export default function TvShow() {
  const api = "b945b7d799af78198469af9a38757f24";
  const imgpath = "https://image.tmdb.org/t/p/w500";
  const [allTvs, setAllTvs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
          api_key: api,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setAllTvs(response.data.results);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="d-flex flex-column">
      <div className="h1 text-center mb-5 "> Tv Shows</div>
      <div className="container">
        <div className="row">
            {allTvs.map((tv) => {
                return(
                  <Card title={tv.name} date={tv.first_air_date} poster={`${imgpath}${tv.poster_path}`}/>
                )
            })}
        </div>
      </div>
    </div>
  );
}
