const API_KEY = '039883bb1877e34e72c27e70c59f4dc5';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Os Filmes mais populares (popular)
- Os Ultimos filmes lançados (now_playing)
- Os mais bem ranqueados (top_rated)
*/

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() => {
        return [{
                slug: 'popular',
                title: 'Filmes + Populares',
                items: await basicFetch(`/movie/popular?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'nowplaying',
                title: 'Filmes Lançamentos',
                items: await basicFetch(`/movie/now_playing?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Filmes + Ranqueados',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    },
    getMovieInfo: async(movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }
}