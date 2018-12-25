module.exports = function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
			return submittedUsers.every(obj => goodUsers.some(user => user === obj))
	}
}