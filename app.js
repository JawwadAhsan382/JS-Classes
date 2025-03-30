// class abc{
//     constructor(){
//         this.v1=8
//         this.v2=10
//     }
//     sum(x,y){
//         return x+y
//     }
// }
// class xyz extends abc{
//     sum(x,y,z){
//         return x+y+z
//     }
//     mul(x,y){
//         return x*y
//     }
// }
// class xyz extends abc{
//     constructor(){
//         super()
//         this.v3=9
//     }
//     sum(x,y,z){
//         return super.sum(x,y)+z
//     }
//     mul(x,y){
//         return x*y
//     }
//     static mean(...args){
//         var sum=0
//         for(var i=0;i<args.length;i++){
//             sum+=args[i]
//         }
//         sum/=args.length
//         return parseFloat(sum.toFixed(2))
//     }
//     get name(){
//         return this.pname
//     }
//     set name(x){
//         this.pname=x.toUpperCase()
//     }
// }
// var obj1=new abc()
// var obj2=new xyz()
// class Tree {
//     _species='oak';
//     set species(x){
//         this._species=x
//     }
// }
// let tree=new Tree()
// tree.species='maple'
// console.log(tree._species);