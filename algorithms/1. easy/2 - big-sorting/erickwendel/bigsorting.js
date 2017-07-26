/*




var maior = 0
for i in inputs:
	i > maior
		maior = i

menor = 0
for i in inputs
	i < maior
		menor = i

return menor

menor(inputs, indexes)
	for index in indexes: 
		menor = maior
		for i in inputs
			i <= menor
				menor = i
		return menor

count = 0		
while(inputs.length > 0) {
	result = menor(inputs, indexes)
	inputs = inputs.pop(result)
	list[count] = result
	count ++ 

}



[0]
[
	3, 
	2,
	1,
	3
]




6
31415926535897932384626433832795
1
3
10
3
5

[

]

*/

const MAX_NUMBER = 31415926535897932384626433832795
class BigSorting {

	static menor(arrays) {
		let menorElemento = MAX_NUMBER
		for (let i in arrays) {
			const item = arrays[i]
			if (item > menorElemento) continue

			menorElemento = item
		}
		return menorElemento
	}

	static sort(arrays) {
		let iterable = true
		let lista = []
		while (iterable) {
			const menorItem = this.menor(arrays)
			let index = arrays.indexOf(menorItem)
			delete arrays[index]
			arrays = arrays.filter(item => item)
			lista.push(menorItem)
			iterable = arrays.length != 0
		}
		return lista
	}
}

//------------------------------------ HACKERRANK
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	var n = parseInt(readLine());
	let item = [];
	for (var item_i = 0; item_i < n; item_i++) {
		item[item_i] = readLine();
	}
	// your code goes here
	BigSorting.sort(item).map(i => console.log(i))
}


module.exports = BigSorting

