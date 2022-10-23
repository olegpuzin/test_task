import React from 'react';

function Pagination({ page, setPage, countPage }) {

    const prevPage = () => {
        setPage(page - 1);
    }
    const nextPage = () => {
        setPage(page + 1);
    }

    return (
        <div className='pagination'>
            {page > 1 && <button onClick={() => setPage(1)} className='pageNumber start'>1</button>}
            {page > 1 && <span className='pageNumber prevPoint'>. . .</span>}
            {page - 1 > 0 && <button onClick={prevPage} className='pageNumber'>{page - 1}</button>}
            <button className='pageNumber_active'>{page}</button>
            {page < countPage && <button onClick={(nextPage)} className='pageNumber'>{page + 1}</button>}
            {page < countPage - 1 && <span className='pageNumber nextPoint'>. . .</span>}
            {page < countPage - 1 && <button onClick={() => setPage(65)} className='pageNumber end'>{countPage}</button>}
        </div>
    )
}

export default Pagination;