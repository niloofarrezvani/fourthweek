
const myName = []
while (true) {
    const names = prompt('please enter name');
    if (names === 'stop') {
        break;
    }
    myName.push(names);
}
console.log(myName);


function joinTogether(joinNames) {
    const length=joinNames.length
    if (length ===0) {
        return `Nobody likes this`;
    }
    else if(length===1){
        return `${joinNames[0]} likes this.`
    }
     else if (length===2) {
        return `${joinNames[0]} and ${joinNames[1]} likes this`;}
        else{
            const lastTwoNames = joinNames.slice(-2).join(' and ');
            const remainingNames = joinNames.slice(0, -2).join(', ');
            return remainingNames + ', ' + lastTwoNames + ' like this';
        }
            
     
        }
console.log(joinTogether(myName));