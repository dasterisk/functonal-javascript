/*
*messages has a key and a value.
*messages: [ { message: 'Qui nisi tempor velit aliquip eu.' }, 
*						 { message: 'Duisaliqua magna labore laboris sint in.' } ]
*/
function getShortMessages(messages){
	return messages.filter(message => message.message.length < 50).map(message => message.message);
}

module.exports = getShortMessages;