import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../redux/slices/filterSlice/filters';
import styles from "./search.module.css"

const Search = () => {
    
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef(null);

    const dispatch = useDispatch();

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 500),
        [],
    );
    
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };
    
    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    };

    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 489.713 489.713">
                <path d="m483.4 454.444-121.3-121.4c28.7-35.2 46-80 46-128.9 0-112.5-91.5-204.1-204.1-204.1S0 91.644 0 204.144s91.5 204 204.1 204c48.8 0 93.7-17.3 128.9-46l121.3 121.3c8.3 8.3 20.9 8.3 29.2 0s8.3-20.7-.1-29zm-442.7-250.3c0-90.1 73.2-163.3 163.3-163.3s163.4 73.3 163.4 163.4-73.3 163.4-163.4 163.4-163.3-73.4-163.3-163.5z" />
            </svg>
            <input 
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            className={styles.input} 
            placeholder='Search...' />
            {value && (
            <svg 
            onClick={onClickClear}
                className={styles.clearIcon}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1000 1000">
                <path d="M990 57.1 942.9 10 500 452.9 57.1 10 10 57.1 452.9 500 10 942.9 57.1 990 500 547.1 942.9 990l47.1-47.1L547.1 500 990 57.1z"/>
            </svg>
            )}
        </div>
    )
}

export default Search;
