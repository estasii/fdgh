const number = prompt('Enter number: ',1);
if (chekNumber(number)) {
    console.log(checkParity(Number(number)))
}else{
    console.log('Error, value must be number');
}
/**
 * 
 * @param{number} number
 * @returns {string}
 */
function checkParity(number){
    if(number%2===0){
        return 'even'
    }
    return 'odd'
}
/**
 * 
 * @param{any} value
 * @returns {boolean}
 */
function checkNumber(value){
    const checkValue = value === ''|| value === null || Number. isNaN(Number(value))
    return !checkValue
}

const vale1='4';
const value2= 4;
console.log(compareTwoNumbers(value1, value2));
/**
 * 
 * @param {any} value1
 * @param {any} value2
 * @returns {any | null}
 */
function compareTwoNumbers(value1, value2){
if (typeof value1 === typeof value2) {
 if(value1 === value2) return null;
 if(value1>value2) return value1;
 return value2  
}
return null
}