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

// Get existing scores
router.get("/:gameId", async function (req, res, next) {
  try {
    
    const scores = await getScores(req.params.gameId);
    res.json({ 
      message: "Current Score",
      data: scores
   });
  } catch (error) {
    console.log(error)
  }
});
// add a new score
router.post("/",scoreDTOValidator(addScoreDTO), async(req, res, next) => {
  try {
    
  } catch (error) {
    c
  }
  const { gameId, userId, score } = req.body;
  const savedScore = await addScore({ gameId, userId, score });
  res.json({
    message: "Added Score",
    data: savedScore,
  });
});
// update an existing score
router.put("/:gameId", scoreDTOValidator(updateScoreDTO), async(req, res, next) => {
  const { gameId } = req.params;
  const { userId, score } = req.body;
  const updatedScore = await updateScore({ gameId, userId, score });
  res.json({
    message:'Updated Score',
    data: updatedScore,
  });
});
// delete an existing score
router.delete(
  "/:gameId",
  scoreDTOValidator(deleteScoreDTO),
  (req, res, next) => {
    const { gameId } = req.params;
    const { userId } = req.body;
    const deletedScore = deleteScore({gameId, userId});
    res.json({
        message:'Score Deleted',
      data: deletedScore,
    });
  }
);
module.exports = router;
