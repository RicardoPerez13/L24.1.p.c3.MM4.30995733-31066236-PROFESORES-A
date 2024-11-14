let profesoresCategoria=(profesores,categoria)=>{
    let nombres= [];
    for(let i=0;i<profesores.length;i++){
        if(profesores[i].categoria===categoria){
            nombres.push(profesores[i].nombre)
        }
    }
    return nombres
        };
    
    

let profesores=[
    {categoria:1,nombre:"Ana",sexo:"F"},
    {categoria:2,nombre:"Jose",sexo:"M"},
    {categoria:3,nombre:"Juan",sexo:"M"},
    {categoria:4,nombre:"Pedro",sexo:"M"},
    {categoria:5,nombre:"Victor",sexo:"M"},
    {categoria:1,nombre:"Daniela",sexo:"F"}

];

let salida=document.getElementById("salida")

salida.innerHTML=`
Profesores de categoria Instructor: ${profesoresCategoria(profesores,1)}
<br>Profesores de categoria Asistente: ${profesoresCategoria(profesores,2)}
<br>Profesores de categoria Agregado: ${profesoresCategoria(profesores,3)}
<br>Profesores de categoria Asociado: ${profesoresCategoria(profesores,4)}
<br>Profesores de categoria Titular: ${profesoresCategoria(profesores,5)}
`
