import { Router } from 'express';

/* GET home page. */
Router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

export default Router;
