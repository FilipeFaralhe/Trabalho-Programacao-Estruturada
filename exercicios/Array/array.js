comparar = false;
class Array {
    constructor(){
        this.item = [];
        this.count = 0;
    }

    add(elemento){
        if(this.item.length == 0){
            this.item.push(elemento);
            this.count++;
        } else {
            if(typeof(elemento) == typeof(this.item[0])){
                this.item.push(elemento);
                this.conut++;
            } else {
                comparar = true;
            }
        } 
    }
    remove(){
        this.item.pop();
        this.count--
    }

    limpar(){
        this.item = [];
    }

    ultimo(){
        return this.item[this.item.length - 1];
    }

    estaVazia(){
        return this.item == 0;
    }

    print(){

        document.getElementById("resposta").innerHTML = "";
        this.item.forEach(printArray);
    
    }
}

function printArray(item, index){

    let node = document.createElement("button");//1
    node.setAttribute("id", "array"); 
    node.setAttribute("name", index); 
    let text = document.createTextNode(item);//2
    node.appendChild(text);//3
    document.getElementById("resposta").appendChild(node);

}


function addButton(event){


    let valor = document.getElementById("entrada").value; //1
    let valN = Number(valor);

    if(valor == "" || valor == null){ //1.1
        document.getElementById("avisos").innerHTML = "Não é possível inserir um valor nulo";
    } else{
        if(isNaN(valN)) {
            array.add(valor);
            document.getElementById("avisos").innerHTML = "Valor Inserido!";
        } else {
            array.add(valN);
            document.getElementById("avisos").innerHTML = "Valor Inserido!";
        }
        if(comparar == true){
            document.getElementById("avisos").innerHTML = "Tipo diferente, favor esvaziar o array para insirir o valor desejado!";
            comparar = false;
        }
        
        array.print()//3
        document.getElementById("entrada").value = "";//4
    }

    document.getElementById("pop").disabled = false;
}

    // Habilita  a tecla enter
    document.addEventListener('keypress', function(e){
        if(e.which == 13){
          addButton();
        }
    }, false);

    function estaVazia(){
        if(array.estaVazia() == true){
            document.getElementById("avisos").innerHTML = "Array está vazia!"
      } else {
            document.getElementById("avisos").innerHTML = "Array não está vazia!"
        }
    }

      
    function removeButton(){
        if(array.estaVazia() == true){
            document.getElementById("pop").disabled = true;
            array.limpar();
            array.remove();//1
            array.print();//2
            document.getElementById("resposta").innerHTML = "Array_vazio";
            document.getElementById("avisos").innerHTML = "";
        } else {
            array.remove();//1
            array.print();//2
            document.getElementById("avisos").innerHTML = "Valor removido";
        }
    }

    function ultimo(){
        if(array.estaVazia() == false){
            document.getElementById("avisos").innerHTML = "O ultimo elemento do array é " + array.ultimo() + ".";
        } else {
            document.getElementById("avisos").innerHTML = "O array está vazia";
        }
    }



const array = new Array();
array.print();