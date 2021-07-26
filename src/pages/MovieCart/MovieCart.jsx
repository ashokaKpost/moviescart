import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardComponent from '../../components/Card/CardComponent';
import API from '../../services/APIService';
import './MovieCart.css';
import { useHistory } from 'react-router-dom';
import { IMAGE_URL, IMDB, STAR } from '../../constants/Constants';

const MovieCart = () => {
     const [movies, setMoves] = React.useState([]);

     let history = useHistory();

     const _getMovies = async () => {
          let response;
          try {
               response = await API.GET_MOVIES(1);
               if (response?.results.length > 0) setMoves(response?.results);
          } catch (error) {
               console.log(error, 'Error to handle get movies');
          }
     };

     React.useEffect(() => _getMovies(), []);

     const MovieItem = ({ item }) => (
          <Col lg={3} md={4} sm={6} xs={12} className={'movieItem'} onClick={() => history.push(`/movie/${item.id}/details`)}>
               <CardComponent className={'movieCard'} des={item.overview}>
                    <img src={`${IMAGE_URL}${item.poster_path}`} className={'movieImg'} />
                    <div style={{ margin: '15px' }}>
                         <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#000', textAlign: 'center' }}>
                              {item.original_title}
                         </p>
                         <div
                              style={{
                                   border: '.5px solid #d2d2d2',
                                   width: '100%',
                              }}
                         />
                    </div>
                    <div className={'movieDes'}>
                         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <img src={IMDB} style={{ width: '30px', height: '20px' }} />
                              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#000', marginTop: '5px' }}>
                                   {item.vote_average}
                              </p>
                         </div>
                         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <img src={STAR} style={{ width: '20px', height: '20px' }} />
                              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#000', marginTop: '5px' }}>{item.vote_count}</p>
                         </div>
                    </div>
               </CardComponent>
          </Col>
     );

     return (
          <React.Fragment>
               <Container fluid={true} className={'container'}>
                    <Row>{movies.length > 0 && movies.map((x, i) => <MovieItem item={x} key={i} />)}</Row>
               </Container>
          </React.Fragment>
     );
};

export default MovieCart;
