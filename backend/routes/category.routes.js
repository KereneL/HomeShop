import Category from '../models/category.model.js';
import express from 'express';
const router = express.Router();

router
	.route('/')
	.get((req, res) => {
		Category.find()
			.then(categories => {res.json(categories)})
			.catch(err => res.status(400).json(err));

		});

router
	.route('/new')
	.post((req, res) => {
		const name = String(req.body.name);
		const newCategory = new Category({
			name
		});

		newCategory.save()
			.then(() => res.json('New Category Created'))
			.catch(err => res.status(400).json(err));
	});

router
	.route('/:cid')
	.get((req, res) => {
		Category.findById(req.params.cid)
			.then(Category => res.json(Category))
			.catch(err => res.status(400).json(err));
		});

router
	.route('/update/:cid')
	.post((req, res) => {
		Category.findById(req.params.cid)
			.then(cat => {
				cat.name = String(req.body.name);

				cat.save()
					.then(() => res.json('Category updated!'))
					.catch(err => res.status(400).json(err))
			})
			.catch(err => res.status(400).json(err));
		});


export default router;