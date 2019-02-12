module.exports = function(sequelize, DataTypes) {
  var Videogames = sequelize.define("Videogames", {
    console: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [1, 30],
        notEmpty: true
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [1, 30],
        notEmpty: true
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Videogames;
};
