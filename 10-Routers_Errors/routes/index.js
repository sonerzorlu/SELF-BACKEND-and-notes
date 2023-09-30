'use strict'


const router = require('express').Router();


router.get("/", (req, res) => {
  res.send({ message: "GET request to the homepage" });
});
router.get("/about", (req, res) => {
  res.send({ message: "GET request to the about page" });
});
router.get("/user/:userId", (req, res) => {
  res.send({ message: "GET request to the user page" });
});

module.exports = router;
