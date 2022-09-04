const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const btnSearch = document.getElementById("search");

function searchForBooks() {
	clearAllBooks();
	let bookName = document.getElementById('book-title').value; // The input text
    fetch(URL + bookName)
    	.then(res => res.json())
    	.then(showBooks)
}

function showBooks(res) {
	for (let i = 0; i < res.items.length; i++) {
	let item = res.items[i];
	let book = 'book'+(i+1);

	  // The book's div
    let imgDiv = document.createElement('div');
    document.getElementById(book).appendChild(imgDiv);
    imgDiv.className = "img";

    // The image's div
    let img = document.createElement('img');
    img.src = item.volumeInfo.imageLinks.thumbnail;
    imgDiv.appendChild(img);

    // The data div
    let dataDiv = document.createElement('div');
    document.getElementById(book).appendChild(dataDiv);
    dataDiv.className = "data";

    // The title
    let title  = document.createElement('h2');
    dataDiv.appendChild(title);
    title.innerHTML = item.volumeInfo.title;

    // The description
    let description = document.createElement('p');
    description.innerHTML = item.volumeInfo.description;
    dataDiv.appendChild(description);
    }
}

btnSearch.addEventListener("click", searchForBooks);

function removeElementsByClass(className){
    let elements = document.getElementsByClassName(className);
    for(j=0; j<elements.length; j++){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function clearAllBooks(){
  removeElementsByClass('img');
  removeElementsByClass('data');
}




