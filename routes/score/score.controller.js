var express = require("express");
const {
  scoreDTOValidator,
  addScoreDTO,
  updateScoreDTO,
  deleteScoreDTO,
} = require("../../validators/score.validators");
const {
  getScores,
  addScore,
  updateScore,
  deleteScore,
} = require("./score.service");
var router = express.Router();

// Get existing Game scores
router.get("/:gameId", async function (req, res, next) {
  try {
    const scores = await getScores(req.params.gameId);
    res.json({
      message: "Current Score",
      data: scores,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// Create a new Game score
router.post("/", scoreDTOValidator(addScoreDTO), async (req, res, next) => {
  try {
    const { gameId, userId, score } = req.body;
    const savedScore = await addScore({ gameId, userId, score });
    res.json({
      message: "Added Score",
      data: savedScore,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// update an existing Game's score
router.put(
  "/:gameId",
  scoreDTOValidator(updateScoreDTO),
  async (req, res, next) => {
    const { gameId } = req.params;
    const { userId, score } = req.body;
    try {
      const updatedScore = await updateScore({ gameId, userId, score });
      if (updatedScore === null) {
        return res.status(404).json({
          error: 'Score not found'
        });
      }
      res.json({
        message: "Updated Score",
        data: updatedScore,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// delete an existing Game score
router.delete(
  "/:gameId",
  scoreDTOValidator(deleteScoreDTO),
  (req, res, next) => {
    const { gameId } = req.params;
    const { userId } = req.body;
    try {
      const deletedScore = deleteScore({ gameId, userId });
      if (deletedScore === null) {
        return res.status(404).json({
          error: 'Score not found'
        });
      }
      res.json({
        message: "Score Deleted",
        data: deletedScore,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);
module.exports = router;
