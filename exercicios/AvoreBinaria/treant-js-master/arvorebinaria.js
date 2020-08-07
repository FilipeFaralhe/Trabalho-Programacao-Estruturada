let array = [];

class Node {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
        array.push(key);
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    inserir(key) {
        if (this.root == null ) {
            this.root = new Node(key);
        } else {
            this.inserirNode(this.root, key);
        }
    }
    
    inserirNode(node, key) {
        if (parseInt(key, 10) < parseInt(node.key, 10)){
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.inserirNode(node.left, key);
            } 
        }
        if (parseInt(key, 10) > parseInt(node.key, 10)){
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.inserirNode(node.right, key);
            } 
        }
    }

    getRoot() {
        return this.root;
    }

    getClear() {
        this.root = null;
        array = [];
    }

    getMax() {
        let current = this.root;
        let getKey;
        while(current.right != null){
            current = current.right
            getKey = current.key;
        }
        return getKey; 
    }

    getMin() {
        let current = this.root;
        let getKey;
        while(current.left != null){
            current = current.left
            getKey = current.key;
        }
        return getKey;
    }
    
    
    search(key){
        let current = this.root;
        //encontrar elemento no root
        if (key == current.key){
            return true;
        }
       
        do{  
            //encontrar elemento no right
            if (key > current.key) {
                current = current.right
                //console.log(current.key);
                if(current == null){
                    return false;
                }
                if (key == current.key){
                    return true;
                } else if (current.right == null && current.left == null || current.key == null) {
                    return false;
                }
            }
            //encontrar elemento no left
            if(key < current.key){
                current = current.left
                if(current == null){
                    return false;
                }
                if (current.key == key){
                    return true;
                } else if (current.right == null && current.left == null || current.key == null) {
                    return false;
                }
            }
            
        } while(current.right != null || current.left != null);
    }

    balance(){
        let aux = 0;
        let val = Math.round(array.length / 2);
        let valorMeio;
        let valorMeioDireita, valMeiaEsquerda;

        let balanceioD = [];
        let balanceioE = [];

        for(let i = 0; i < array.length; i++){     
            if(i == val){
                valorMeio = array[i - 1];
            }
            if( array[i] > valorMeio){
                balanceioD.push(array[i]);
            } else {
                balanceioE.push(array[i]);
            }
        }

        this.getClear();
        this.inserir(valorMeio);

        // Direita
        let valDireita = Math.round(balanceioD.length / 2);
        for(let j = 0; j < balanceioD.length; j++){
            if(valDireita == j){
                valorMeioDireita = balanceioD[j - 1];
                this.inserir(valorMeioDireita);                
            }
            for(let k = 0; k < balanceioD.length; k++){
                if(balanceioD[k] < valorMeioDireita){
                    this.inserir(balanceioD[k]);
                    aux = 1;
                }
                if(aux == 1){
                    if(balanceioD[k] > valorMeioDireita){
                        this.inserir(balanceioD[k]);
                    }
                }
            }     
        }

        // Esquerda
        let valEsquerda = Math.round(balanceioE.length / 2);
        for(let l = 0; l < balanceioE.length; l++){
            if(valEsquerda == l){
                valMeiaEsquerda = balanceioE[l - 1];
                this.inserir(valMeiaEsquerda);
            }

            for(let m = 0; m < balanceioE.length; m++){
                if(balanceioE[m] < valMeiaEsquerda){
                    this.inserir(balanceioE[m]);
                    aux = 1;
                }
                if(aux == 1){
                    if(balanceioE[m] > valMeiaEsquerda){
                        this.inserir(balanceioE[m]);
                    }
                }
            }
        }
        
        this.print();
    }

    getNodeJson(node){
        let obj = new Object();
        obj.text = new Object();
        obj.text.name = node.key;

        obj.children = new Array();

        let nullLeaf = new Object();
        nullLeaf.text = new Object();
        nullLeaf.text.name = "null";

        if(node.left == null){
            obj.children.push(nullLeaf);
        } else {
            obj.children.push(this.getNodeJson(node.left));
        }

        if(node.right == null){
            obj.children.push(nullLeaf);
        } else {
            obj.children.push(this.getNodeJson(node.right));
        }

        return obj;
    }

    getTreeJson(){
        let obj = new Object();
        obj.chart = new Object();
        obj.chart.container = "#tree-simple";
 
        obj.nodeStructure = new Object();
        if(this.root != null){
            obj.nodeStructure = this.getNodeJson(this.root);
        } else {
            
        }

        return obj;
    }

    print(){
        console.log(JSON.stringify(tree, null, 2));

        let simple_chart_config = this.getTreeJson();

        Treant(simple_chart_config);
    }
    
    // buildTree() {
    //     let treejson1 = this.getTreeJson();
    //     var my_chart = new Treant(treejson1);
    // }
}

const tree = new BinarySearchTree()
tree.print();
console.log(tree);


