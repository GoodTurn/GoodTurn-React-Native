import { Router } from 'express';


/* GET users listing. */
Router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.json([
    {
      id: 1,
      username: "samsepi0l",
    }, 
    {
    	id: 2,
    	username: "D0loresH4ze",
    }
  ]);
});

export default Router;
