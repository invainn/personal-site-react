const keystone = require('keystone');

exports = module.exports = nextApp => keystoneApp => {

	const handle = nextApp.getRequestHandler();

	keystoneApp.get('/api/posts', (req, res, next) => {
		const Post = keystone.list('Post');

		Post.model
			.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.exec((err, result) => {
				if (err) throw err;
				res.json(result);
			});
	});

	keystoneApp.get('/posts', (req, res, next) => {
		const Post = keystone.list('Post');
		const PostsPage = '/posts';

		Post.model
			.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.exec((err, result) => {
				if (err) throw err;

				nextApp.render(req, res, PostsPage, result);
			});
	});

	keystoneApp.get('/post/:slug', (req, res, next) => {
		const Post = keystone.list('Post');
		const PostPage = '/post';

		// get post
		Post.model
			.findOne()
			.where('state', 'published')
			.where('slug', req.params.slug)
			.exec((err, result) => {
				if (err) throw err;

				// render Post page with result as props
				nextApp.render(req, res, PostPage, result);
			});
	});

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};
