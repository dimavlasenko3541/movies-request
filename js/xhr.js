const getData = (url) =>
  fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      if (json.Search) return json.Search;
      throw Error("Сервер вернул неправильный обьект");
    });


inputSearch.addEventListener("keyup", (e) => {
  delay(() => {
    const searchString = e.target.value;
    if (searchString && searchString.length > 4)
      if (!triggerMode) clearMoviesMarcup();

    getData(`https://www.omdbapi.com/?s=${searchString}&apikey=c71c5bd0`)
      .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
      .catch((err) => console.log(err));
  }, 1000);
});
