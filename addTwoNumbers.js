console.log(addnumbers(10,5));  //15

function addnumbers(num1, num2){
    return num1+num2;
    
}

//****************************************MULTIPLYNUMBERS************************************************ */
console.log(multiplynumbers(10,5)); //50

function multiplynumbers(num1,num2){
    return num1*num2;
}

//***************************************sum***************************************************************** */
function addnum(num1,num2){
    var sum;
    console.log(sum); //undefined
    sum=num1+num2;
    return sum;
}
console.log(addnum(10,5)); //15

//**************************************************************************************************** */
{
    console.log(x); //undefined
console.log(y);  //throws referense error
console.log(z);  //throws referense error

var x="Ram";
let y="Seeta";
const z= "Red";
console.log(x);
console.log(y);
console.log(z);
}

//*********************************************************************************************** */
{
    console.log(a); //throws reference error
    let a="Ram";
    console.log(a);
}