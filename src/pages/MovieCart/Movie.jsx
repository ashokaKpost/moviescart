import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import API from '../../services/APIService';
import {IMAGE_URL, IMDB, STAR } from '../../constants/Constants';

const Movie = (props) => {
     const [movie, setMovie] = React.useState({});
     let { match } = props;
     let { id } = match.params;

     const _getMovie = async () => {
          let response;
          try {
              response = await API.GET_MOVIE(id);
              if (response) setMovie(response);
          } catch (error) {
               console.log(error);
          }
     };

     React.useEffect(() => _getMovie(), []);

     return (
          <Container style={{ padding: '15px' }}>
               <Row>
                    <Col lg={5} md={6} sm={12} xs={12}>
                         <img src={`${IMAGE_URL}${movie.poster_path}`} style={{ width: '80%', height: '100%' }} />
                    </Col>
                    <Col lg={7} md={6} sm={12} xs={12}>
                         <p style={{ fontSize: '30px', fontWeight: 'bold' }}>{movie.original_title}</p>
                         <div
                              style={{
                                   display: 'flex',
                                   flexDirection: 'row',
                              }}>
                              <div
                                   style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                   }}>
                                   <img src={IMDB} style={{ width: '30px', height: '20px' }} />
                                   <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#000', margin: '10px' }}>
                                        {movie.vote_average}
                                   </p>
                              </div>
                              <div
                                   style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                   }}>
                                   <img src={STAR} style={{ width: '20px', height: '20px' }} />
                                   <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#000', margin: '10px' }}>
                                        {movie.vote_count}
                                   </p>
                              </div>
                         </div>
                         <p style={{ margin: '10px', textAlign: 'justify' }}>{movie.overview}</p>
                    </Col>
               </Row>
          </Container>
     );
};

export default Movie;
