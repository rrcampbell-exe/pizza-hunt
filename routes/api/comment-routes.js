const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");

// Set up all POST routes at /api/comments/:pizzaId
router.route("/:pizzaId").post(addComment);

router.route("/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
