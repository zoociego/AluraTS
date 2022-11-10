//Generics 
var nameMaria = {
    name: 'Maria'
};
function getMaria(nidValue, maria) {
    var nid = nidValue;
    if (nid) {
        return maria;
    }
}
getMaria(27000, 'Maria');
getMaria('27000', nameMaria);
