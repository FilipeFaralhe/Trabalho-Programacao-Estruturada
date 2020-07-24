class set {
    constructor(){
        this.itens = {}
    }
    //Métodos da classe conjunto
    has(element){
        return element in this.itens; 
    }
     
    add(element){
        if(!this.has(element)){
            this.itens[element] = element;
            return true;
        }else{
            console.log("Elemento " + element + " já existe no conjunto");
            return false;
        }
    }

    remove(element){
        if(this.has(element)){
            delete this.itens[element];
            return true;
        }else{
            console.log("Elemento " + element + " não existe no conjunto");
            return false;
        }
    }

    claer(){
        this.itens = {};
    }

    size(){
        return Object.keys(this.itens).length;
    }

    values(){
        return Object.values(this.itens);
    }

    printC(){
        //escrever código para imprimir aqui
        //document.getElementById("resposta").innerHTML = pilha.items;
        //limpa a impressão da pilha
        document.getElementById("resposta").innerHTML = "";
        //imprime a pilha
        this.itens.forEach(printConjunto);
    }

    print(){
        //escrever código para imprimir aqui
        //document.getElementById("resposta").innerHTML = pilha.items;
        //limpa a impressão da pilha
        document.getElementById("resposta").innerHTML = "";
        //imprime a pilha
        this.itens.forEach();
    
    }

}//fim classe Pilha


// function printConjunto(item, index){
//     //1) Criar o elemento
//     //2) Criar o texto do elemento
//     //3) Adicionar o texto ao elemento
//     //4) Adicionar o elemento já com texto ao elemento pai
//     let node = document.createElement("div");//1
//     let text = document.createTextNode(item);//2
//     node.setAttribute("id", "Fila"); 
//     node.setAttribute("name", index);
//     node.appendChild(text);//3
//     document.getElementById("resposta").appendChild(node);
// }


function printC(item, index){
    let node = document.createElement("div")
    node.setAttribute("id", index);
    let text = document.createTextNode(item);
    node.appendChild(text);
    document.getElementById("reposta").appendChild(node);
}

function addConjunto() {
    let conjunto = document.createElement("div");
    let ConjuntoId = document.getElementById("conjunto").value;
    conjunto.setAttribute("id", ConjuntoId);
    document.getElementById("reposta").appendChild(conjunto);
}



function addElemento(conjunto, elemento){

}

function removeElemento(conjunto, elemento){

}

function removeConjunto() {
    
}

function EsvaziaConjunto(conjunto, elemento) {
    
}

function EsvaziaElemento() {
    
}

// // Habilita  a tecla enter
// document.addEventListener('keypress', function(e){
//     if(e.which == 13){
//       addButton();
//     }
//   }, false);


const conjunto = new set();
conjunto.print();


