const express = require("express")
let router = express.Router()
let SignUpControllers = require("../Controllers/SignUp")

router.post("/", SignUpControllers.AddUserAccount)

module.exports = router