var nameVar = 'Mike';
var nameVar = 'Mikeee';
//  redefine and reassign is possible but wrong

let nameLet = "Ana";
nameLet = "Anastasia";
// reassign is possible, redefine not

const nameConst = "Frank";
// redefine and reassign is impossible

// ------- // -------
function getPetname(){
    const petName = "Snezhok"; //var/const/let are not available in a parent global scope, not accessable outside of the function
    return petName;
}
const petName = getPetname();

// ------- Block scoping -------
var fullName = 'Ana Sha';
 if (fullName) {
     var firstName = fullName.split(' ')[0];
     console.log(firstName);
 }
 console.log(firstName);
 //you can access it because it was var
 // if it is const or let, you will not be able to access it outside of the scope
 // only if to define let/const above the block
 const fullN = 'Kate Sha';
 let firstN;
 if (fullN) {
     firstN = fullN.split(' ')[0];
     console.log(firstN);
 }
 console.log(firstN);

