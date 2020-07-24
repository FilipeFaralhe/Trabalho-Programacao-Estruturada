function buttonAdd(){
    if(document.getElementById("entrada").value != ""){
        let x = document.getElementById("entrada").value;
        document.getElementById("entrada").value = "";
        document.getElementById("avisos").innerHTML = "Valor adicionado: " + x;
        tree.inserirAll(x);
        tree.print();
    }
    document.getElementById("entrada").focus();
}

function buttonClear() {
    tree.getClear();
    tree.print();
}

function buttonMin() {
    let min = tree.getMin();
    document.getElementById("avisos").innerHTML = "Menor valor: " + min;
}

function buttonMax() {
    let max = tree.getMax();
    document.getElementById("avisos").innerHTML = "Maior valor: " + max;
}

function buttonSearch() {
    if(document.getElementById("entrada").value != ""){
        let value = document.getElementById("entrada").value;
        let search = tree.search(value);
        if(search == true){
            document.getElementById("avisos").innerHTML = "Valor encontrado"
        } else {
            document.getElementById("avisos").innerHTML = "Valor não encontrado"
        }
    }
}

function buttonEquilibra() {
    tree.Equilibra();
    tree.print();
    
}