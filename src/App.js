import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import Joke from './components/Joke';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';

function App() {
  const [jokes, setJokes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState(0);

  const limitPage = 10;

  useEffect(() => {
    
    const getJokes = async() => {
      try {
        await axios(`https://icanhazdadjoke.com/search?page=${page}&limit=${limitPage}`, {headers:{'Accept': 'application/json'}})
        .then(({data}) => {
          setJokes(data.results);
          setCountPage(data.total_pages);
      })
      setLoader(false);
      } catch (err) {
        alert('Ошибка при получении данных');
        console.log(err)
      }
    }

    getJokes();
  }, [page]);


  return (
    <div className="App">
      <div className='content'>
        {loader 
        ? <div className='spinner'><Spinner /></div>
        : jokes.map(({ id, joke }) => (
            <Joke key={id} joke={joke} />
          ))}
      </div>
      <Pagination page={page} countPage={countPage} setPage={setPage} />
    </div>
  );
}

export default App;
