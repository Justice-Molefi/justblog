'use client'

import styles from './styles/searchBar.module.css'

type SearchBarProps = {
  onChange: (value: string) => void;
};


export default function SearchBar({onChange} : SearchBarProps){
    return(
        <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.search} type="text" placeholder="search posts..." onChange={(e) => onChange(e.target.value)}/>
        </form>
    );
}