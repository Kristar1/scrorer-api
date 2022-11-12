const Score = require("./score.model");

const getScores =async (gameId) => {
  const gameScore = await Score.findOne({gameId:gameId})
  return gameScore
};

const addScore = async({ gameId, userId, score }) => {
  const newScore = new Score({
    gameId,
    userId,
    score,
  });
  return await newScore.save();
  
};

const updateScore = ({gameId, userId, score}) => {
    return Score.findOneAndUpdate({
      gameId,
      userId
    }, {
      score
    },
    {
      new: true
    });
  }
const deleteScore = async({ gameId, userId}) => {
    const deletedScore = Score.findOne({gameId, userId})
    await deletedScore.remove()
  return deletedScore
};

module.exports = {
  getScores,
  addScore,
  updateScore,
  deleteScore,
};
