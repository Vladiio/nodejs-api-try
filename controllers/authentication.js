const User = require('../models/user');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res
      .status(422)
      .send('You must provide an email and password');
  }
  User.findOne({ email }, (err, existingUser) => {
    // console.log(existingUser);
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res
        .status(422)
        .send({ error: 'email is in use' });
    }

    const user = new User({ email, password });
    user.save(err => {
      if (err) return next(err);
      res.json({ success: true });
    });
  });
};
