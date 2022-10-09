const fs      = require( 'fs' )
const colors  = require( 'colors' );




const crearArchivo = async ( base = 5, list = false, to = 10 ) => {

  try{

    console.clear();
    console.log( colors.underline(`TABLA de Multiplicación Número: `.green, `${ base }`.red) );
    let salida, porConsola = '';
  
    for(let i = 0; i<= to ; i++){
         salida += `${ base } x ${i} = ${base * i}\n`;
         porConsola += `${ base } ${ 'x'.red } ${i} = ${base * i}\n`;
    }
    // Escribir en el archivo txt los resultados
    //fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if(err) throw err;
    //     console.log(`Tabla de ${base} creada.`);
    //});
  
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    // console.log( `tabla-${ base }.txt creado` );

    if( list ) console.log( porConsola );

    return `Tabla de ${base}, ha creado correctamente`;
    
  }catch( err ){
    throw err;
  }

    
}


module.exports = {
  crearArchivo
}
