const user = require("../models/user");

exports.signin = (req, res) => {
  try {
    res.status(200).send({
      status: true,
      message: "Sign in successfully"
    });
  } catch (err) {
    res.status(500).send({
      status: true,
      message: "Server error"
    });
  }
};


exports.signup = (req, res) => {
    try {
      res.status(200).send({
        status: true,
        message: "Sign Up successfully"
      });
    } catch (err) {
      res.status(500).send({
        status: true,
        message: "Server error"
      });
    }
  };

  exports.signout = (req, res) => {
    try {
      res.status(200).send({
        status: true,
        message: "Sign out successfully"
      });
    } catch (err) {
      res.status(500).send({
        status: true,
        message: "Server error"
      });
    }
  };

  
