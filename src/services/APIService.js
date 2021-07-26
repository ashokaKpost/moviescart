const OPTIONS = {
     URL1: 'https://api.themoviedb.org/3/discover/movie',
     URL2: 'https://api.themoviedb.org/3/movie',
     API_KEY: '3d485e84c7ae1856fb134fefd31ed2df',
     LANG: 'en-US',
     SORT: 'sort_by=popularity.desc&include_video=false',
};

exports.GET_MOVIES = async (page) => {
     let response;
     try {
          response = await fetch(`${OPTIONS.URL1}?api_key=${OPTIONS.API_KEY}&language=${OPTIONS.LANG}&${OPTIONS.SORT}&page=${page}`, {
               method: 'GET',
          });
          if (response) return response.json();
     } catch (error) {
          throw error;
     }
};

exports.GET_MOVIE = async (id) => {
     let response;
     try {
          response = await fetch(`${OPTIONS.URL2}/${id}?api_key=${OPTIONS.API_KEY}&language=${OPTIONS.LANG}`, {
               method: 'GET',
          });
          if (response) return response.json();
     } catch (error) {
          throw error;
     }
};
