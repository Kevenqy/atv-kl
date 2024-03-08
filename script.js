function FazerCalculo(){
    let valueF01 = document.getElementById("Faixa01").value;
    let valueF02 = document.getElementById("Faixa02").value;
    let multi = document.getElementById("multi").value;
    let tolerancia = document.getElementById("toler").value;
    let total = ((valueF01+valueF02)*multi);
    let maismenos = (total*tolerancia);
    let menor = (total - maismenos);
    let maior = (total + maismenos);
    //alert("Fazendo Cálculo...");
   // alert("O resultado é" + menor + " e " + maior);
    document.getElementById("resist").value = (total);
    document.getElementById("tolera").value = (menor+"-"+maior);
}
