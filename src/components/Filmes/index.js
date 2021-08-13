import React from 'react';
import './Filmes.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {


    return (
        <div className = "filmes" >
            <div className = "filmes--listarea" >
            <h2> { "Sessão de Detalhes dos "+title } </h2>
            <hr/>
                <div className = "filmes--list">
                    {
                        items.results.length > 0 && items.results.map((item, key) => ( 



                            <div key = { key } className = "filmes--item" >    
                                
                                <section className = "filmes--image"
                                         style = {
                                                    {   
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        height: 730,
                                                        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                                                    }
                                                } >
                        <div className = "filmes--vertical" >
                        <div className = "filmes--horizontal" >
                        <div className = "filmes--title" > { item.title } </div>  
                        <div className = "filmes--info" >
                            <div className = "filmes--points" > { item.vote_average } avaliação dos usuários </div>  
                            <div className = "filmes--year" > { item.release_date } </div>  
                            <div className = "filmes--descricao" > { item.overview.substring(0,250)+'...' } </div> 
                        </div> 
                        
                </div>  
            </div>
        </section>
        
                                 
                            </div>
                            
                        ))
                    } 
                </div>    
            </div>
        </div>

        
    );

    
}