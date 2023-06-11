const sequelize = require("../config/connection.js")
const seedComment = require("./comment-seeds.js")
const seedPosts = require("./post-seeds.js")
const seedUsers= require("./user-seeds.js")


const seedAll = async () => {
    try {
      await sequelize.sync({ force: false });
      console.log('\n----- DATABASE SYNCED -----\n');
await seedUsers();
console.log('\n----- User Seeded -----\n');
      
      await seedComment();
      console.log('\n----- Comment Seeded -----\n');
      await seedPosts();
      console.log('\n----- Post Seeded -----\n');

      process.exit(0);
    } catch (error) {
      console.error('Error seeding database:', error);
      process.exit(1);
    }
  };
  
  seedAll();




