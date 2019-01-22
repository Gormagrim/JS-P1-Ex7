alert('Donnez votre pointure et votre année de naissance.');

function game(){

    // Multiplier la pointure par 2
    // Ajouter 5 au résultat
    // Multiplier le tout par 50
    // Soustraire l’année de naissance
    // Ajouter au tout 1766
    var regex = new RegExp(/[1-9]/);
    var shoeSize = document.getElementById('shoeSize').value;
    var yearOfBirth = document.getElementById('yearOfBirth').value;

    var result = ((((shoeSize * 2)+5)*50) - yearOfBirth)+1766 ;

    if (regex.test(shoeSize) & regex.test(yearOfBirth)){
      alert(result);
    }
    else{
      alert('Chiffres différents de 0 et pas de lettres svp.')


}
}
