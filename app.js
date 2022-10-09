const { crearArchivo } = require( './helpers/multiplicacion' );
const { argv }             = require( './config/yargs' );


console.clear();
console.clear();

crearArchivo( argv.b, argv.l, argv.t )
    .then( value => console.log( value, 'Correctamente' ) )
    .catch( err => console.log( err, " Error en la función " ) );

