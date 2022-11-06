import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchJokes } from './redux/slices/asyncAction';
import { setPage } from './redux/slices/filters';
import Joke from './components/Joke';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';
import Search from './components/Search';
import './App.css';

function App() {

  const {jokes, status} = useSelector(state => state.jokes)
  const {searchValue} = useSelector(state => state.filter)
  const {page, countPage} = useSelector(state => state.filter.currentPage);
  const dispatch = useDispatch();

  const limitPage = 10;


  useEffect(() => {

    (async() => {
      dispatch(fetchJokes({
        page,
        limitPage,
        searchValue,
      }))
    })()

  }, [page, searchValue]);


  return (
    <div className="App">
      <Search />
      <div className='content'>
        {status === 'error' 
        ? (<div className="content_error">
              <h2>An error has occurred 😕</h2>
              <p>
                Unfortunately, it was not possible to get the pits. Please try again later.
              </p>
            </div>)
        : (status === 'loading' 
            ? <div className='spinner'><Spinner /></div>
            : jokes.map(({ id, joke }) => (
                <Joke key={id} joke={joke} />
          )))}
      </div>
      <Pagination page={page} countPage={countPage} setPage={setPage} />
    </div>
  );
}

export default App;
