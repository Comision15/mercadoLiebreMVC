const db = require('../database/models');

const {loadProducts,storeProducts} = require('../data/productsModule');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
	
		db.Product.findAll({
			include : ['images']
		})
			.then(products => res.render('products', {
				products,
				toThousand
			}))
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		db.Product.findByPk(req.params.id,{
			include : ['images']
		})
			.then(product => res. render('detail', {
				product,
				toThousand
			}))
			.catch(error => console.log(error))
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		db.Category.findAll({
			attributes : ['id','name'],
			order : ['name']
		})
			.then(categories => {
				return res.render('product-create-form', {
					categories
				})
			})
			.catch(error => console.log(error))
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		db.Product.create({
			...req.body,
			name : req.body.name.trim(),
			description : req.body.description.trim()
		})
			.then(product => {
				if(req.files.length){
					let images = req.files.map(({filename}) => {
						return {
							file : filename,
							productId: product.id
						}
					})
					db.Image.bulkCreate(images,{
						validate : true
					}).then( (result) => console.log(result) )
				}
				return res.redirect('/products')
			})
			.catch(error => console(error))
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		let categories = db.Category.findAll({
			attributes : ['id','name'],
			order : ['name']
		});
		let product = db.Product.findByPk(req.params.id);

		Promise.all([categories,product])
			.then(([categories,product]) => {
				return res.render('product-edit-form',{
					product,
					categories
				})
			})
			.catch(error => console.log(error));
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		db.Product.update(
			{
				...req.body,
				name : req.body.name.trim(),
				description : req.body.description.trim()
			},
			{
				where : {
					id : req.params.id
				}
			}
		)
			.then( () => res.redirect('/products/detail/' + req.params.id) )
			.catch(error => console.log(error))
		 
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	
		db.Product.destroy({
			where : {
				id : req.params.id
			}
		})
			.then( () => res.redirect('/products'))
			.catch( error => console.log(error));
	}
};

module.exports = controller;