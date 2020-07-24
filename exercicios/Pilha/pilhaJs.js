var comparar = false;
class Pilha{
    constructor(){
        this.items = [];
    }
    
    push(element){
        if(this.items.length == 0){
            this.items.push(element);
        } else {
            if(typeof(element) == typeof(this.items[0])){
                this.items.push(element);
            } else {
                comparar = true;
            }
        } 
    }

    pop(){
        this.items.pop();
    }
    
    isEmpty(){
        if (this.items.length === 0 ){
            return true;
        }
        return false;
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    size(){
        return this.items.length;
    }

    print(){
        //escrever código para imprimir aqui
        //document.getElementById("resposta").innerHTML = pilha.items;
        //limpa a impressão da pilha
        document.getElementById("resposta").innerHTML = "";
        //imprime a pilha
        this.items.forEach(printPilha);
    
    }

}//fim classe Pilha

function printPilha(item, index){
    //1) Criar o elemento
    //2) Criar o texto do elemento
    //3) Adicionar o texto ao elemento
    //4) Adicionar o elemento já com texto ao elemento pai
    let node = document.createElement("button");//1
    node.className = "btn btn-dark btn-block";
    node.setAttribute("id", "pilha");
    node.setAttribute("name", item);
    node.setAttribute("onclick", "removeUltimo(this.name)");
    let text = document.createTextNode(item);//2
    node.appendChild(text);//3
    //document.getElementById("resposta").appendChild(node);//4
    let list = document.getElementById("resposta");//4
    list.insertBefore(node, list.childNodes[0]);//4
}

function addButton(event){
    //1) pega o valor que está na caixa de texto
    //1.1) verificar se a caixa de texto não está vazia
    //2) add esse valor na pilha
    //3) imprime a pilha
    //4) limpar a caixa de texto
    //5) retorna o focus para a caixa de texto
    //6) faz o enter acionar a função add

    let valor = document.getElementById("entrada").value; //1
    let valN = Number(valor);

    if(valor == "" || valor == null){ //1.1
        document.getElementById("avisos").innerHTML = "Não é possível inserir um valor nulo";
    } else{
        if(isNaN(valN)) {
            pilha.push(valor);
            document.getElementById("avisos").innerHTML = "Valor Inserido!";
        } else {
            pilha.push(valN);
            document.getElementById("avisos").innerHTML = "Valor Inserido!";
        }
        if(comparar == true){
            document.getElementById("avisos").innerHTML = "Tipo diferente, favor esvaziar a pilha para insirir o valor desejado!";
            comparar = false;
        }
    
        pilha.print()//3
        document.getElementById("entrada").value = "";//4
    }
}


// Habilita  a tecla enter
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      addButton();
    }
  }, false);

  

function removeButton(){
    //1) remover o último elemento da pilha
    //2) imprime a pilha
    //3) se a pilha já estiver vazia, exibe um aviso
    if(pilha.isEmpty() == true){
        document.getElementById("pop").disabled = true;
        pilha.pop();//1
        pilha.print();//2
        document.getElementById("resposta").innerHTML = "pilha_vazia";
    } else {
        pilha.pop();//1
        pilha.print();//2
    }
   
}

function ultimoButton(){
    if(pilha.isEmpty() == false){
        document.getElementById("avisos").innerHTML = "O ultimo elemento da pilha é " + pilha.peek() + ".";
    } else {
        document.getElementById("avisos").innerHTML = "Não foi possível reconhecer o último elemento.";
    }
}


function estaVazia(){
    if(pilha.isEmpty() == true){
        document.getElementById("avisos").innerHTML = "Pilha está vazia!"
    } else {
        document.getElementById("avisos").innerHTML = "Pilha não está vazia"
    }
}

function removeUltimo(Ultimo){
    let valor = pilha.peek();
    if(valor == Ultimo){
        pilha.pop();
        pilha.print();
        document.getElementById("avisos").innerHTML = "Removido";
    } else {
        document.getElementById("avisos").innerHTML = "Erro! Não é o ultimo elemento";
    }
}

const pilha = new Pilha();
pilha.print();


