/* eslint-disable no-plusplus */
const arrayOfValues: number[] = [];

for (let i = 0; i < 169; i++) {
  const newNum = Math.floor(Math.random() * 200) - 100
  if (arrayOfValues.indexOf(newNum) > -1) {
    i -= 1
  } else {

    arrayOfValues.push(newNum)
  }

}
export default arrayOfValues;
