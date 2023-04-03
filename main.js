var images=["Donatello.jpg","Leonardo.jpg","Michelangelo.jpg","Raphael.jpg"]
var names=["Donatelo","Leonardo","Michelangelo","Raphael"]

var i = 0;
function update()
{
    i++

    var numbersOffFamilyInArray = 5
    if(i > numbersOffFamilyInArray)
    {
        i =0;
    }

    var updateImages = [i];
    var updateNames = [i];
    document.getElementById("ImagemDosMembrosDaFamilia").src = updateImages;
    document.getElementById("nomeDosMembrosDaFamilia").innerHTML = updateNames;
}
