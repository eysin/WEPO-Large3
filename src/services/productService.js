
const common = require('./common');


const bubbleService = () => {
	return {
		getProducts: predicate =>
			common.fetchWithPredicate(predicate, "http://localhost:3500/products", 'bubbles'),
		getBundles: predicate =>
			common.fetchWithPredicate(predicate, "http://localhost:3500/bundles", 'bundles'),
	};
};

module.exports = bubbleService();
