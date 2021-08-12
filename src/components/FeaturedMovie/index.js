import React from 'react';
import './FeaturedMovie.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {




    let genres = [];
    for(let i in item.genres){
        genres.push( item.genres[i].name);
    }

    let descricao = item.overview;
    if(descricao.length > 400){
        descricao = descricao.substring(0, 400)+'...'; 
    }
    
    return ( 
        <section className = "featured"
        style = {
            {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }
        } >
        <div className = "featured--vertical" >
        <div className = "featured--horizontal" >
        <div className = "featured--title" > { item.title } </div>  
        <div className = "featured--info" >
            <div className = "featured--points" > { item.vote_average } avaliação dos usuários </div>  
            <div className = "featured--year" > { item.release_date } </div>  
            <div className = "featured--descricao" > { descricao } </div> 
            <div className="featured--buttons">
                <a href={`/watch/${item.id}`} className="featured--watchbutton"> ► Assistir</a>
                <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
            </div>
            <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div> 
        </div>  
        </div>
        </section>
    );
}