function buttonAdd(){
    if(document.getElementById("entrada").value != ""){
        let x = document.getElementById("entrada").value;
        document.getElementById("entrada").value = "";
        document.getElementById("avisos").innerHTML = "Valor adicionado: " + x;
        tree.inserir(parseInt(x));
        tree.print();
        console.log(typeof(x));
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
    let value = document.getElementById("entrada").value;
    let search = tree.search(value);
    console.log(search);
    console.log(value)
    if( value == "" || value == null) {
        document.getElementById("avisos").innerHTML = "Preencha o campo"
    }else if(search == true){
        document.getElementById("avisos").innerHTML = "Valor encontrado"
    } else {
        document.getElementById("avisos").innerHTML = "Valor não encontrado"
    }
}

function Buttonbalancear(){
    let raiz = tree.getRoot();

    if(raiz == "" || raiz == null){
        document.getElementById("avisos").innerHTML = "Árvore vazia";
    } else {
        tree.balance();
        tree.print();
        document.getElementById("avisos").innerHTML = "Árvore equilibrada"
    }
}