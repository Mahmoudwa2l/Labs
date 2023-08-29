import './Products.css'
import Card from '../../components/card/Card';
import axios from "axios";
import { useEffect } from 'react';

function Products() {
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en`)
        .then((response)=>{
            console.log(response.data);
            
        }).catch((err)=>{
            console.log(err);
        });
    }, [] );
  return (
    <div>
        <h1 className='text-center mb-4'>Movies</h1>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Products