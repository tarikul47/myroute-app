// define the get route
exports.routeGet = (req, res) => {
  
  res.render('home');

};
// define the about route
exports.routeAboutGet = (req, res) => {
  console.log(req.body);
  res.json('success');
};
