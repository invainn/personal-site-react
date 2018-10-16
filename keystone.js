// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// Require keystone
const keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'personal-site',
	'brand': 'personal-site',
	'auto update': true,
	'session store': 'mongo',
	'auth': true,
	'user model': 'User',
	'cloudinary config': process.env.CLOUDINARY_URL,
	'cookie secret': process.env.COOKIE_SECRET,
	'mongo': process.env.MONGO_URI,
});

// Load your project's Models
keystone.import('models');

app.prepare()
	.then(() => {
		// Load your project's Routes
		keystone.set('routes', require('./routes')(app));

		// Configure the navigation bar in Keystone's Admin UI
		keystone.set('nav', {
			posts: ['posts', 'post-categories'],
			users: 'users',
		});

		keystone.start();
	});
