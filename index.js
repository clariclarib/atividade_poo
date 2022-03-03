class Retangulo{
  constructor(largura, altura){
    this.largura = largura;
    this.altura = altura
  }

  area(){
    return this.calcularArea()
  }
  
  calcularArea(){
   return this.largura * this.altura
  }
}

let retangulo = new Retangulo(35, 30)
console.log(retangulo.area())

let retangulodois = new Retangulo(67, 67)
console.log(retangulodois.area())

