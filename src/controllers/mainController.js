const db = require('../database/models');
const { Op } = require('sequelize')
const { loadProducts } = require('../data/productsModule');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		let inSale = db.Product.findAll({
			where: {
				discount: {
					[Op.gt]: 10
				}
			},
			include: ['images', 'category']
		});

		let newest = db.Product.findAll({
			order: [
				['createdAt', 'DESC']
			],
			limit: 4,
			include: ['images', 'category']
		})

		let home = db.Category.findByPk(1,{
				include: [
					{
						association : 'products',
						include : ['images']
					}
				]
			})

		Promise.all([inSale, newest, home])
			.then(([inSale, newest, home]) => {
				return res.render('index', {
					inSale,
					newest,
					home,
					toThousand
				})
			})
			.catch(error => console.log(error))



	},
	search: (req, res) => {
		// Do the magic
		const products = loadProducts();
		const result = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()));

		return res.render('results', {
			products: result,
			keywords: req.query.keywords,
			toThousand
		})
	},
};

module.exports = controller;
