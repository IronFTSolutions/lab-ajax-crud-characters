class APIHandler {
	constructor(baseURL) {
		//being baseURL 'https://minions-api.herokuapp.com/characters'
		this.api = axios.create({ baseURL })
	}

	getFullList = () => this.api.get().catch(err => console.log(err))

	getOneRegister = id => this.api.get(`/${id}`)

	createOneRegister = character => this.api.post('', character)

	updateOneRegister = (id, character) => this.api.put(`/${id}`, character)

	deleteOneRegister = id => this.api.delete(`/${id}`, { id })

	deleteAll = () =>
		this.getFullList().then(response =>
			Promise.all(response.data.map(elm => this.deleteOneRegister(elm.id))).then(response => console.log(response))
		)
}
