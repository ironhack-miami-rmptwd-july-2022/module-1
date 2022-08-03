// console.log('Connected', {document});
// window.onload = () => {
//     console.log("connected on load");
// }

const randomNameButton = document.querySelector('#nameRandomizerButton');
const nameDisplay = document.querySelector('div#nameDisplay h3.theName');
const listOfNames = [...document.querySelectorAll('#nameDisplay ul li')].map(name => name.innerHTML);
const longListOfNames = [...listOfNames, 'Marcos', 'Mich', 'Laz', 'Ryan']

// These are 2 methods of converting nodelist into an array so that you may loop through them using the built in js loop methods (ie: .filter(), .forEach(), .map())

// const mylistOfNamesArrayMethod1 = Array.from(listOfNames);
// const mylistOfNamesArrayMethod2 = [...listOfNames];

const randomNum = (maxLimit) => {
    return Math.floor(Math.random() * maxLimit)
    }



randomNameButton.addEventListener('click', () => {
    // console.log('Button Clicked');
    // console.log({display: nameDisplay.innerHTML, theName: listOfNames[randomNum(listOfNames.length)]});
    nameDisplay.innerHTML = longListOfNames[randomNum(longListOfNames.length)];
})


window.addEventListener('load', () => {
    // const {document} = event.target;    // this happens under the hood;
    console.log("Connected : ", {randomNameButton, listOfNames, nameDisplay});

})


