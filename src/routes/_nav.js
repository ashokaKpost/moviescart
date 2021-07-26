const React = require('react');
const MovieCart = React.lazy(() => import('../pages/MovieCart/MovieCart'));
const Movie = React.lazy(() => import('../pages/MovieCart/Movie'));

exports.Navs = [
     { path: '/', exact: true, component: '' },
     { path: '/moviecart', exact: true, component: MovieCart },
     { path: '/movie/:id/details', exact: true, component: Movie },
];
