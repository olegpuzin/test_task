import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './pagination.module.css';


function Pagination({ page, setPage, countPage }) {

    const dispatch = useDispatch();

    const prevPage = () => {
        dispatch(setPage(page - 1));
    }
    const nextPage = () => {
        dispatch(setPage(page + 1));
    }

    return (
        <div className={styles.pagination}>
            <button onClick={() => dispatch(setPage(1))} className={`${styles.pageNumber} ${styles.start}`}>1</button>
            <span className={styles.prevPoint}>. . .</span>
            <button disabled={page <= 1} onClick={prevPage} className={styles.pageNumber}>prev</button>
            <button className={styles.pageNumber_active}>{page}</button>
            <button disabled={page >= countPage} onClick={nextPage} className={styles.pageNumber}>next</button>
            <span className={styles.nextPoint}>. . .</span>
            <button onClick={() => dispatch(setPage(countPage))} className={`${styles.pageNumber} ${styles.end}`}>{countPage}</button>
        </div>
    )
}

export default Pagination;