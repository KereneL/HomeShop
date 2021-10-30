import express from 'express';
import User from '../models/user.model.js';
const router = express.Router();

router
	.route('/')
	.get((req, res) => {
		User.find()
		.then(User => res.json(User))
		.catch(err => res.status(400).json(err));
		})


router
	.route('/:uid')
	.get((req, res) => {
		User.find({ id: req.params.uid})
			.then(User => res.json(User))
			.catch(err => res.status(400).json(err));
		})
	.patch((req, res) => {
		User.find({ id: req.params.uid})
			.then(User => {
				const first_name = String(req.body.first_name);
				const last_name = String(req.body.last_name);
				const password = String(req.body.password);

				User.save()
					.then(() => res.json('User Updated'))
					.catch(err => res.status(400).json(err));
			})
			.catch(err => res.status(400).json(err));
		});

router
	.route('/signup')
	.post((req, res) => {
		const id = '0' //String(req.body.id);
		const first_name = String(req.body.first_name);
		const last_name = String(req.body.last_name);
		const email = String(req.body.email);
		const password = String(req.body.password);
		const is_admin = Boolean(false);
		const active_cart_id = Number(-1);

		const newUser = new User({
			id,
			first_name,
			last_name,
			email,
			password,
			is_admin,
			active_cart_id,
		});

		newUser.save()
			.then(() => res.json('New User Created'))
			.catch(err => res.status(400).json(err));
		});

router
	.route('/login')
	.post((req, res) => { 	

		login()
		.then(() => res.json('Logged In'))
		.catch(err => res.status(400).json(err));
});

export default router;