const  Post  = require("../models/post")
// const sequelize = require("../config/connection")



async function seed() {

    const postData = 
    [
        {
          title: "The Future of Artificial Intelligence",
          description: "Explore the latest advancements and potential applications of AI technology.",
          user_id:1
        },
        {
          title: "Top 10 Programming Languages in 2023",
          description: "Discover the most popular programming languages that are shaping the tech industry.",
          user_id:2
        },
        {
          title: "The Rise of Blockchain Technology",
          description: "Learn about the revolutionary potential of blockchain and its impact on various industries.",
          user_id:1
        },
        {
          title: "Understanding Cloud Computing",
          description: "Explore the concept of cloud computing and its advantages in today's digital landscape.",
          user_id:2
        },
        {
          title: "The Importance of Cybersecurity",
          description: "Learn about the significance of cybersecurity and how to protect your digital assets.",
          user_id:2
        },
        {
          title: "Introduction to Machine Learning",
          description: "Get started with the basics of machine learning and its practical applications.",
          user_id:1
        },
        {
          title: "The Evolution of Mobile Technology",
          description: "Trace the history of mobile devices and explore the latest advancements in mobile tech.",
          user_id:2
        },
        {
          title: "Demystifying Big Data Analytics",
          description: "Understand the concept of big data and how organizations leverage it for insights.",
          user_id:2
        },
        {
          title: "The Impact of 5G Technology",
          description: "Explore the potential of 5G networks and how they will revolutionize connectivity.",
          user_id:1
         
        },
        {
          title: "The Rise of Internet of Things (IoT)",
          description: "Discover the transformative power of IoT and its implications on everyday life.",
          user_id:2
        },
        {
          title: "The Future of Virtual Reality (VR)",
          description: "Explore the exciting developments in virtual reality technology and its future possibilities.",
          user_id:1
        },
        {
          title: "Artificial Intelligence in Healthcare",
          description: "Learn how AI is revolutionizing the healthcare industry and improving patient care.",
          user_id:2
        },
        {
          title: "Introduction to Data Science",
          description: "Discover the interdisciplinary field of data science and its practical applications.",
          user_id:1
        },
        {
          title: "The Role of UX Design in Modern Apps",
          description: "Explore the importance of user experience (UX) design in creating successful applications.",
          user_id:2
        },
        {
          title: "The Power of Augmented Reality (AR)",
          description: "Learn about the transformative potential of AR technology in various industries.",
          user_id:1
        }
      ]
      
    

    try {

     const data =  await Post.bulkCreate(postData);
        console.log('Seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    }

}
// Export the seed function
module.exports = seed;