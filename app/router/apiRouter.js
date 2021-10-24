const router = require("express").Router();

const apiController = require("../controller/apiController");

router.get("/",apiController.apiHome);

router.get("/get-student-list",apiController.getStudentList);

router.get("/save-new-student",apiController.saveNewStudent);

module.exports = router;