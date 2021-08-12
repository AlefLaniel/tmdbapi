/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Filmes from './components/Filmes';

export default () => {


    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async() => {
            // Pegando a lista dos filmes
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //Pegando o Featured
            let popular = list.filter(i => i.slug === 'popular');
            let toprated = list.filter(i => i.slug === 'toprated');
            let randomChosenp = Math.floor(Math.random() * (popular[0].items.results.length - 1));
            let randomChosent = Math.floor(Math.random() * (toprated[0].items.results.length - 1));
            let chosen = (popular[0].items.results[randomChosenp]) && (toprated[0].items.results[randomChosent]);
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
            setFeaturedData(chosenInfo);


        }

        loadAll();
    }, []);


    useEffect(() => {
       const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            }else{
                setBlackHeader(false);
            }
       }

       window.addEventListener('scroll', scrollListener);

       return () => {
           window.removeEventListener('scroll', scrollListener);
       }
    }, []);

    return ( 
    <div className = "page" >

        <Header black={blackHeader}/>

        {
            featuredData &&
            <FeaturedMovie item = { featuredData }/>
        }

        <section className = "lists" > {
            movieList.map((item, key) => ( 
                <MovieRow key = { key }
                title = { item.title }
                items = { item.items }/>
            ))
        } 
        </section> 

        <section className = "films" > {
            movieList.map((item, key) => ( 
                <Filmes key = { key }
                title = { item.title }
                items = { item.items }/>
            ))
        } 
        </section> 

        <footer>
            Desenvolvido por Alef Laniel <span role="img" aria-label="coração"> ♥ </span>
            <br/>            
            Direitos de imagem e dados do site Themoviedb.org
        </footer>

        {movieList.length <=  0 && 
            <div className="loading">
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
            </div>
        }
        </div>
    );
}