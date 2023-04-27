var images=["https://i.postimg.cc/yYmz85p3/familia.jpg","https://i.postimg.cc/DZMMxQjT/Donatello.jpg","https://i.postimg.cc/4x17VWym/Leonardo.jpg","https://i.postimg.cc/xTfSq5ws/Michelangelo.jpg","https://i.postimg.cc/KjYJh1W5/Raphael.jpg"]
var names=["Donatelo","Leonardo","Michelangelo","Raphael"]

var i = 0;
function update()
{
    var numbersOffFamilyInArray = 5
    if(i > numbersOffFamilyInArray)
    {
        i =0;
    }

    var updateImages = [i];
    var updateNames = [i];
    document.getElementById("ImagemDosMembrosDaFamilia").src = updateImages;
    document.getElementById("nomeDosMembrosDaFamilia").innerHTML = updateNames;
    i++
}
