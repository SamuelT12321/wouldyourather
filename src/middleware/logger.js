const logger = (sotre) => (next) => (action)=>{
	console.group(action.type)
		console.log('The action: ', action)
		const returnValue = new(action)
		console.log('The new state: ', store.getState())
	console.groupEnd()
	return returnValue
}

export default logger