import express from 'express';
import Order from '../models/order.model.js';
const router = express.Router();

router
	.route('/')
	.get((req, res) => {
		Order.find()
		.then(Order => res.json(Order))
		.catch(err => res.status(400).json(err));
		})

router
	.route('/:oid')
	.get((req, res) => {
		Order.find({ id: req.params.oid})
			.then(Order => res.json(Order))
			.catch(err => res.status(400).json(err));
		});

router
	.route('/user/:uid')
	.get((req, res) => {
		Order.find({ user_id: req.params.uid})
			.then(Order => res.json(Order))
			.catch(err => res.status(400).json(err));
		});
		
	
router
	.route('/new')
	.post((req, res) => {
		const id = String(req.body.id);
		const user_id = String(req.body.user_id);
		const cart_id = String(req.body.cart_id);
		const date_ordered = Date(req.body.date_ordered);
		const address = String(req.body.address);
		const supply_date = Date(req.body.supply_date);
		const cc_4_digits = String(req.body.cc_4_digits);
		const total_cost = Number(req.body.total_cost);

		const newOrder = new Order({
			id,
			user_id,
			cart_id,
			date_ordered,
			address,
			supply_date,
			cc_4_digits,
			total_cost
		});

		newOrder.save()
			.then(() => res.json('New Order Created'))
			.catch(err => res.status(400).json(err));
		});


export default router;