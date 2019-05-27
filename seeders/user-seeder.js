"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    // Add seeded burgers to database
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstname: "Wendy",
          lastname: "Jones",
          screenname: "user1",
          password: "***",
          score: -12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Joe",
          lastname: "Smith",
          screenname: "first1",
          password: "***",
          score: -100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Fred",
          lastname: "Stevens",
          screenname: "first1",
          password: "***",
          score: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Susan",
          lastname: "Holmes",
          screenname: "first1",
          password: "***",
          score: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Kelly",
          lastname: "Charles",
          screenname: "first1",
          password: "***",
          score: 4000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Bob",
          lastname: "Smith",
          screenname: "first1",
          password: "***",
          score: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Steve",
          lastname: "Jones",
          screenname: "first1",
          password: "***",
          score: -10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Ruth",
          lastname: "Johnson",
          screenname: "first1",
          password: "***",
          score: -22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "George",
          lastname: "Mann",
          screenname: "first1",
          password: "***",
          score: -33,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Joel",
          lastname: "Kingman",
          screenname: "first1",
          password: "***",
          score: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Mac",
          lastname: "Kim",
          screenname: "first1",
          password: "***",
          score: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "Whopper",
          lastname: "Dude",
          screenname: "user1",
          password: "***",
          score: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    // Remove the seeded burgers
    return queryInterface.bulkDelete("users", null, { truncate: true });
  }
};
