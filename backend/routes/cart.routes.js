import express from 'express';
import Cart from '../models/cart.model.js';
const router = express.Router();


router
	.route('/:cid')
	.get((req, res) => {
		Cart.find({ id: req.params.cid})
			.then(Cart => res.json(Cart))
			.catch(err => res.status(400).json(err));
		})
	.patch((req, res) => {
		Cart.find({ id: req.params.cid})
			.then(Cart => {
				const items = [];
				const amounts = [];

				Cart.save()
					.then(() => res.json('Cart Updated'))
					.catch(err => res.status(400).json(err));
			})
			.catch(err => res.status(400).json(err));
		})
	.delete((req, res) => {


	});

router
	.route('/new')
	.post((req, res) => {
		const id = String(req.body.id);
		const items = [];
		const amounts = [];
		const initial_date = Date(req.body.initial_date);
		const user_id = String(req.body.user_id);

		const newCart = new Cart({
			id,
			items,
			amounts,
			initial_date,
			user_id
		});

		newCart.save()
			.then(() => res.json('New Cart Created'))
			.catch(err => res.status(400).json(err));
		});

export default router;