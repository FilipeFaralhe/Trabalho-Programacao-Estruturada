var comparar = false;
class Fila{
    constructor(){
        this.items = [];
        this.cont = 0;
        this.menorcont = 0;
    }
    
    // add(elemento){
    //     this.items[this.cont] = elemento;
    //     this.cont++;
    // }
    
    add(elemento){
        if(this.items.length == 0){
            this.items[this.cont] = elemento;
            this.cont++;
        } else {
            if(typeof(elemento) == typeof(this.items[0])){
                this.items[this.cont] = elemento;
                this.cont++;
            } else {
                comparar = true;
            }
        } 
    }

    remove(){
        if(this.estaVazia()){
            return undefined;
        }
        const result = this.items[this.menorcont];
        delete this.items[this.menorcont];
        this.menorcont++;
        return result;
    }
    estaVazia(){
        return this.cont - this.menorcont === 0;
    }
    tamanho(){
        return this.cont - this.menorcont;
    }
    primeiro(){
        if(this.estaVazia()){
            return undefined;
        }
        return this.menorcont;
    }
    limpar(){
        this.items = [];
        this.cont = 0;
        this.menorcont = 0;
    }

    ultimo(){
        return this.items[this.items.length - 1]
    }

    print(){
        //escrever código para imprimir aqui
        //document.getElementById("resposta").innerHTML = fila.items;
        //limpa a impressão da pilha
        document.getElementById("resposta").innerHTML = "";
        //imprime a Fila
        this.items.forEach(printFila);
    
    }

}//fim classe Fila

function printFila(item, index){
    //1) Criar o elemento
    //2) Criar o texto do elemento
    //3) Adicionar o texto ao elemento
    //4) Adicionar o elemento já com texto ao elemento pai
    let node = document.createElement("button");//1
    node.className = "btn btn-warning btn-block";
    node.className = "border border-black";
    node.setAttribute("id", "Fila"); 
    node.setAttribute("name", index);
    if(index == fila.primeiro()){
        node.className = "border border-danger";
        node.setAttribute("onclick", "removeButton(this.item)");
    }   
    let text = document.createTextNode(item);//2
    node.appendChild(text);//3
    document.getElementById("resposta").appendChild(node);

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
            fila.add(valor);
            document.getElementById("avisos").innerHTML = "Valor Inserido!";
        } else {
            fila.add(valN);
            document.getElementById("avisos").innerHTML = "Valor Inserido!";
        }
        if(comparar == true){
            document.getElementById("avisos").innerHTML = "Tipo diferente, favor esvaziar a fila para insirir o valor desejado!";
            comparar = false;
        }
    
        fila.print()//3
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
    if(fila.estaVazia() == true){
        document.getElementById("avisos").innerHTML = "Fila esta vazia!"
  } else {
        document.getElementById("avisos").innerHTML = "Fila não esta vazia!"
    }
}
  
function removeButton(){
    //1) remove o primeiro elemento da fila
    //2) imprime a fila
    //3) se a fila já estiver vazia, exibe um aviso
    if(fila.estaVazia() == true){
        document.getElementById("pop").disabled = true;
        fila.limpar();
        fila.remove();//1
        fila.print();//2
        document.getElementById("resposta").innerHTML = "fila_vazia";
        document.getElementById("avisos").innerHTML = "";
    } else {
        fila.remove();//1
        fila.print();//2
        document.getElementById("avisos").innerHTML = "Valor removido";
    }
}

function ultimo(){
    if(fila.estaVazia() == false){
        document.getElementById("avisos").innerHTML = "O ultimo elemento da fila é " + fila.ultimo() + ".";
    } else {
        document.getElementById("avisos").innerHTML = "A fila está vazia";
    }
}

const fila = new Fila();
console.log(fila)
fila.print();


