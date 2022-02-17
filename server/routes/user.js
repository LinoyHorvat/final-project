const router = require("express").Router();
const { getUser, getAllUsers } = require("../controllers/users");

module.exports = router;

router.get("/:id", getUser);
router.get("/", getAllUsers);
