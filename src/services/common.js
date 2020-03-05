const common = () => {
	return {
		fetchWithPredicate: (predicate, resource, key) => {
			if(predicate === undefined){
				predicate = ""
			}
			return fetch('http://localhost:3500/api/' + key + "/" + predicate)
			.then(res => {
				console.log(res)
				return res.json();
			})
			.then(data =>{
				return data
			})
		},
	};
};

module.exports = common();
