const withAuth = (req, res, next) => {
// if the user is not logged in, redirect the user to the login page
    if(!req.session.user_id) {
        res.redirect('/login');
   } else {
     // if the user is logged in, execute the route function that will allow them to view the page
     // called next() if the user is authenticated.
        next();
   }
};

module.exports = withAuth;