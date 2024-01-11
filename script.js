const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str, fruit) {
	str = input.value;
	const strLower = str.toLowerCase();
	console.log(strLower);

	const results = fruit.filter(fruit => fruit.toLowerCase().includes(strLower));
	console.log(results);
	return results;
}

function searchHandler(e) {
	if(document.getElementsByClassName('suggestionsContainer')){
		const element = document.getElementsByClassName('suggestionsContainer')[0];
		element.remove();
	}
	search(input.value, fruit);
	showSuggestions();
}

function showSuggestions() {
	results = search(input.value, fruit);

	const container = document.getElementsByClassName("suggestions")[0];
	console.log(container);
	let ul = document.createElement('ul');
	ul.classList.add('suggestionsContainer');
	
	results.forEach(function(result) {
		let li = document.createElement("li");
		li.textContent = result;
		li.classList.add('suggestion');
		li.addEventListener('click', useSuggestion);
		ul.appendChild(li);
	});
    if(input.value === ''){
		ul.style.display = 'none';
	}
	else(
		ul.style.display = 'block'
	)
	container.appendChild(ul);
}

function useSuggestion(e) {
	const suggestion = e.target;
	input.value = suggestion.textContent;
	searchHandler();
	suggestion.parentElement.style.display = 'none';
}

showSuggestions();

input.addEventListener('keyup', searchHandler);