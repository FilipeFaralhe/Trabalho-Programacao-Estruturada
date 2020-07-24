class Node {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
        this.Array = [];
    }

    vazio(){
        this.Array = [];
    }

    inserirAll(key) {
        if (this.root == null ) {
            this.root = new Node(key);
            this.Array.push(key);
        } else {
            this.inserirNodeAll(this.root, key);
        }
    }
    
    inserirNodeAll(node, key) {
        if (parseInt(key, 10) < parseInt(node.key, 10)){
            if (node.left == null) {
                node.left = new Node(key);
                this.Array.push(key);
            } else {
                this.inserirNodeAll(node.left, key);
            } 
        }
        if (parseInt(key, 10) > parseInt(node.key, 10)){
            if (node.right == null) {
                node.right = new Node(key);
                this.Array.push(key);
            } else {
                this.inserirNodeAll(node.right, key);
            } 
        }
    }

    inserirAr(key) {
        if (this.root == null ) {
            this.root = new Node(key);
        } else {
            this.inserirNodeAr(this.root, key);
        }
    }
    
    inserirNodeAr(node, key) {
        if (parseInt(key, 10) < parseInt(node.key, 10)){
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.inserirNodeAr(node.left, key);
            } 
        }
        if (parseInt(key, 10) > parseInt(node.key, 10)){
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.inserirNodeAr(node.right, key);
            } 
        }
    }

    getRoot() {
        return this.root;
    }

    getClear() {
        this.root = null;
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

            //encontrar elemento no left
            if(key < current.key){
                current = current.left
                if(current == null){
                    return false;
                }
                if (key == current.key){
                    return true;
                } else if (current.right == null && current.left == null || current.key == null) {
                    return false;
                }
            }

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
            
        } while(current.right != null || current.left != null);
    }

    Equilibra(){
        let arrayAux1 = [];
        let arrayAux2 = [];

        function sortfunction(a, b){
            return (a - b);
          }
        
        this.Array.sort(sortfunction); // crescente
        this.getClear();
        let tamanho = this.Array.length / 2
        let recebe = Math.round(tamanho - 1);  
        
        this.inserirAr(this.Array[recebe]);
        this.Array.splice(recebe, 1);
        
        for(let i = 0; i < this.Array.length; i++){
            if(i < recebe){
                arrayAux1.push(this.Array[i]);
            } else {
                arrayAux2.push(this.Array[i]);
            }
        }

        // console.log(arrayAux1);
        // console.log(arrayAux2);

        // let recebe1;
        // let tamanho1;
        
        // while(arrayAux1.length != 0){
        //     tamanho1 = arrayAux1.length / 2
        //     if(tamanho1 % 2 == 0){
        //         recebe1 = Math.round(tamanho1); 
        //     } else {
        //         recebe1 = Math.round(tamanho1 - 1); 
        //     }
        //     console.log(arrayAux1);
        //     console.log(recebe1);
        //     if(arrayAux1.length > 1){
        //         this.inserirAr(arrayAux1[recebe1]);
        //         arrayAux1.splice(recebe1, 1);
        //         arrayAux1.sort(sortfunction);
        //     } else {
        //         this.inserirAr(arrayAux1[0]);
        //         arrayAux1.splice(0, 1);
        //     }
        // }

        // let recebe2;
        // let tamanho2;
        
        // while(arrayAux2.length != 0){
        //     tamanho2 = arrayAux1.length / 2
        //     if(tamanho2 % 2 == 0){
        //         recebe2 = Math.round(tamanho2); 
        //     } else {
        //         recebe2 = Math.round(tamanho2 - 1); 
        //     }
        //     console.log(arrayAux2);
        //     console.log(recebe2);
        //     if(arrayAux2.length > 1){
        //         this.inserirAr(arrayAux2[recebe2]);
        //         arrayAux2.splice(recebe2, 1);
        //         arrayAux2.sort(sortfunction);
        //     } else {
        //         this.inserirAr(arrayAux2[0]);
        //         arrayAux2.splice(0, 1);
        //     }
        // }

        let tamanho1 = arrayAux1.length / 2
        let recebe1 = Math.round(tamanho1 - 1); 
        
        while(arrayAux1.length != 0){
            if(arrayAux1.length > 1){
                this.inserirAr(arrayAux1[recebe1]);
                arrayAux1.splice(recebe1, 1);
                arrayAux1.sort(sortfunction);
            } else {
                this.inserirAr(arrayAux1[0]);
                arrayAux1.splice(0, 1);
            }
        }

        let tamanho2 = arrayAux2.length / 2
        let recebe2 = Math.round(tamanho2 - 1); 
        
        while(arrayAux2.length != 0){
            if(arrayAux2.length > 1){
                this.inserirAr(arrayAux2[recebe2]);
                arrayAux2.splice(recebe2, 1);
                arrayAux2.sort(sortfunction);
            } else {
                this.inserirAr(arrayAux2[0]);
                arrayAux2.splice(0, 1);
            }
        }
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
            obj.nodeStructure = {'text':{'name':'Árvore vazia!'}};
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
// tree.inserirAll(3);
// tree.inserirAll(4);
// tree.inserirAll(5);
// tree.inserirAll(6);
// tree.inserirAll(7);
// tree.inserirAll(10);
// tree.inserirAll(11);
// tree.inserirAll(13);
// tree.inserirAll(15);
// tree.inserirAll(4);
// tree.inserirAll(2);
// tree.inserirAll(1);
// tree.inserirAll(3);
// tree.inserirAll(5);
// tree.inserirAll(6);
// tree.inserirAll(7);
tree.print();


