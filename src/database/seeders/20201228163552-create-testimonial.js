module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert('testimonials', [
		{
              name: "John MUGIRANEZA",
              email: "mujohn25@gmail.com",
              message:"Hepi offers a good service, I've really enjoyed how they are helping patients across the country",
              display:"true",
              createdAt: new Date(),
              updatedAt: new Date(),
        },
        {
            name: "Peter MUGISHA",
            email: "mujohn25@gmail.com",
            message:"Hepi offers a good service, I've really enjoyed how they are helping patients across the country",
            display:"true",
            createdAt: new Date(),
            updatedAt: new Date(),
      },
      {
        name: "Jean de Dieu NSHIMIYE",
        email: "mujohn25@gmail.com",
        message:"Hepi offers a good service, I've really enjoyed how they are helping patients across the country",
        display:"true",
        createdAt: new Date(),
        updatedAt: new Date(),
  },
  {
    name: "Julliet MUTONI",
    email: "mujohn25@gmail.com",
    message:"Hepi offers a good service, I've really enjoyed how they are helping patients across the country",
    display:"true",
    createdAt: new Date(),
    updatedAt: new Date(),
}
	]),

	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('testimonials', null, {}),
};
