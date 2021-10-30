import express from 'express';
import Product from '../models/product.model.js';
const router = express.Router();

router
	.route('/')
	.get((req, res) => {
		Product.find().populate("category_id")
			.then(Product => res.json(Product))
			.catch(err => res.status(400).json(err));
		})

router
	.route('/new')
	.post((req, res) => {
		const name = String(req.body.name);
		const price = Number(req.body.price);
		const category_id = String(req.body.category_id);
		const img_path = String(req.body.img_path);

		const newProduct = new Product({
			name,
			price,
			category_id,
			img_path,
		});

		newProduct.save()
			.then(() => res.json('New Product Created'))
			.catch(err => res.status(400).json(err));
		});

router
	.route('/:pid')
	.get((req, res) => {
		Product.findById(req.params.pid)
			.then(Product => res.json(Product))
			.catch(err => res.status(400).json(err));
		})
	.delete((req, res) => {
		Product.find({ id: req.params.pid})
			.then(Product => {

			})
			.catch(err => res.status(400).json(err));
		})
	
router
	.route('/update/:pid')
	.post((req, res) => {
		Product.findById(req.params.pid)
			.then(prod => {
				prod.name = String(req.body.name);
				prod.price = Number(req.body.price);
				prod.category_id = String(req.body.category_id);
				prod.img_path = String(req.body.img_path);

				prod.save()
					.then(() => res.json('Product Updated'))
					.catch(err => res.status(400).json(err))
			})
			.catch(err => res.status(400).json(err));
		}
	);



export default router;