var passport = require('passport'),
bcrypt = require('bcrypt'),
LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOneById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
      User.findOne({ email: email}, function(err, user) {
          if (err) { 
            return done(err); 
          }

          if (!user) { 
            return done(null, false, { message: 'Unknown user ' + email }); 
          }

          bcrypt.compare(password, user.password, function(err, res) {
            if (res === false) {
              return done(null, false, { message: 'Invalid password' }); 
            }
          });

          return done(null, user);
      });
    }
));
