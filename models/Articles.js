"use strict";

module.exports = function (sequelize, DataTypes) {

    var Articles = sequelize.define("Articles", {
      author: DataTypes.STRING,
      blog: DataTypes.STRING
    })
    return Articles;
}
