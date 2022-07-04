module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("players", { 
        name: {
        type: Sequelize.STRING
      },
      goals: {
        type: Sequelize.INTEGER
      }
    })
    return Player;
}