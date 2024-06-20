import React, { useEffect, useState } from 'react'
import OneCard from '../../components/OneCard/OneCard'
// import axios from 'axios'
import axiosInstance from '../../axiosInstance';
import styles from './Catalog.module.css';

const { VITE_API } = import.meta.env;

export default function Catalog({user}) {
  const [stones, setStones] = useState([]);

  useEffect(() => {
    (async function(){
      try {
        const { data } = await axiosInstance.get(`${VITE_API}/stones`)
        setStones(() => data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className={styles.list}>
      {stones.length ?
      stones.map((el) => 
      <OneCard card={el} key={el.id} user={user}/>)
      :
      <h3 style={{fontSize:'40px'}}>Записей нет</h3>}
    </div>
  )
}
