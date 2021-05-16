class repo{
    constructor(data){
     console.log(data);
    }
    setName(){}
}

class repo1 extends repo{
    constructor(data){
    
      super(data) // here we have to call the parent class constructor using super keyword
    }
    setName(name){
        console.log(name);
    }
}

// var demoRepo = new repo('sdfsf');//
var repos    = new repo1('parentConst');
repos.setName('demo1')