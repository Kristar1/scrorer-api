const scoreRouter = require('./score/score.controller.js')

module.exports = (app)=>{
app.use('/score', scoreRouter)
}
