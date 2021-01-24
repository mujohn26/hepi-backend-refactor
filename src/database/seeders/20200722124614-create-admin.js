module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert('admins', [
		{
			firstName: 'John',
			lastName: 'MUGIRANEZA',
			email: 'mujohn25@gmail.com',
			password: '$2a$10$HAwocpYYwhWH8N7ZZF3jouMhQvLtykjOenQ0RgI85vQTBX/UOglOW',
            role: 'superAdmin',
			tel:"0785571790",
			status:"active",
			createdAt: new Date(),
			updatedAt: new Date(),
		}
	]),

	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('admins', null, {}),
};
