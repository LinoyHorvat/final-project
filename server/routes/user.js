const router = require("express").Router();
const { getUser, getAllUsers, updateUser } = require("../controllers/users");

module.exports = router;

router.get("/:id", getUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
