function allEvens(arr) {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}