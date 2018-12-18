module.exports = function(sequelize, DataTypes) {
  let Report = sequelize.define("Report", {
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING, 
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    violation_description: DataTypes.TEXT,
    categories: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });
  return Report;
};
