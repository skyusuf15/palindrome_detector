module.exports = Phrase;

// Adds reverse to all strings.
String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

function Phrase(content) {
	this.content = content;
	this.processedcontent = function () {
		return this.content.toLowerCase();
	}
	this.palindrome = function () {
		return this.processedcontent() === this.processedcontent().reverse();
	}
}