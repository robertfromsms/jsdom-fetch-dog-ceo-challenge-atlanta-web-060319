console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedArr = []



document.addEventListener("DOMContentLoaded", challenge1)
document.addEventListener("DOMContentLoaded", challenge2)
document.addEventListener("DOMContentLoaded", challenge4)

function challenge1() {
	fetch(imgUrl)
	.then((response) => response.json())
	.then((jso) => c1DogImg(jso.message))
}

function c1DogImg(dogArr) {
	let dogImgContainer = document.querySelector('[id="dog-image-container"]')

	dogArr.forEach((dogurl) => {
		dogImgContainer.innerHTML = dogImgContainer.innerHTML + `<img src="${dogurl}">`
	})
}

function challenge2() {
	fetch(breedUrl)
	.then((response) => response.json())
	.then((jso) => c2BreedList(jso.message))
}

function c2BreedList(breeds) {
	let breedKeys = Object.keys(breeds)

	breedKeys.forEach((breedSuff) => {
		if (breeds[breedSuff]) {
			let breedprefArry = breeds[breedSuff]

			breedprefArry.forEach((breedPref) => {
				breedArr.push(`${breedPref} ${breedSuff}`)
			})
		}
		else {
			breedArr.push(`${breedSuff}`)
		}
	})

	let sortBreedArr = breedArr.sort()

	let dogbreedul = document.querySelector('[id="dog-breeds"]')

	sortBreedArr.forEach((breed) => {
		dogbreedul.innerHTML = dogbreedul.innerHTML + `<li>
													  	<font id="${breed}" color="black">${breed}</font>
													  </li>`
		// challenge 3
		dogbreedul.addEventListener("click", c3ClickHandler)
	})
}

function c3ClickHandler(event) {
	let changeColors = {
						"black":"red",
						"red":"black"
					   }

	event.path[0].color = changeColors[event.path[0].color]
}

function challenge4() {
	let dogBreedDropDown = document.querySelector('[id="breed-dropdown"]')
	dogBreedDropDown.addEventListener("change", c4filter)
}

function c4filter(event) {
	let dogbreedul = document.querySelector('[id="dog-breeds"]')
	let breedlis = dogbreedul.querySelectorAll("li")

	breedlis.forEach((breed) => {
		if (event.target.value === "") {
			breed.style.display = "block"
		}
		else if (breed.children[0].id[0] != event.target.value) {
			breed.style.display = "none"
		}
		else {
			breed.style.display = "block"
		}
	})
}