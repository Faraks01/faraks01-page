class Validator {
	constructor( inputValue ) {
		this.inputValue = inputValue;
	}
	get checkName() {
		return ( this.inputValue.length >= 2 && this.inputValue.length <= 16 );
	}
	get checkEmail() {
		let mailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return mailRegex.test( this.inputValue );
	}
	get checkSocMedia() {
		return ( this.inputValue.length <= 50 );
	}
	get checkMessage() {
		return ( this.inputValue.length >= 10 && this.inputValue.length <= 600 );
	}
}
export default Validator
