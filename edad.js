function edades(edad){
    if(edad < 13){
        return "niño";
    }else if(edad>=13 && edad<18){
        return "adolescente"
    }else if(edad>=18 && edad<=64){
        return "adulto";
    }else{
        return "mayor";
    }
}
