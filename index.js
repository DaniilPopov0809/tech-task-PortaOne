const formEl = document.querySelector("#form");
const textAreaEl = document.querySelector("#exampleFormControlTextarea1");
const buttonClearEl = document.querySelector("#btn-clear");
const buttonInfoEl = document.querySelector("#btn-info");
const resultEl = document.querySelector("#result");

const onFormSumbit = (event) => {
  event.preventDefault();
  const arr = textAreaEl.value.trim().replace(/\s+/g, " ").split(" ");

  if (!arr) {
    swal("Oops!", "Enter text in the textarea!", "error");
    return;
  }
  const uniqueArr = findUniqueChar(arr).join("").split();
  const result = findUniqueChar(uniqueArr);
  resultEl.innerHTML = result;
};

formEl.addEventListener("submit", onFormSumbit);
buttonClearEl.addEventListener("click", () => {
  textAreaEl.value = "";
  resultEl.innerHTML = "";
});
buttonInfoEl.addEventListener("click", () =>
  swal(
    "About program",
    `The program takes an arbitrary text as input and finds in each word of this text the very first symbol that is NOT repeated in the analyzed word. Next, the program selects the first unique character from the received set of characters (that is, the one that is no longer found in the set) and returns it in the Result field.`,
    "info"
  )
);

const findUniqueChar = (arr) => {
  let newArr = [];

  arr.forEach((el) => {
    let uniqueChar = "";

    for (let i = 0; i < el.length; i++) {
      let char = el[i];

      if (el.indexOf(char) === el.lastIndexOf(char)) {
        uniqueChar = char;
        break;
      }
    }
    newArr.push(uniqueChar);
  });
  return newArr;
};
