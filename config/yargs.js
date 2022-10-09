// const argv = require('yargs')
//                     .option('b', {
//                         alias:'base',
//                         type:'number',
//                         demandOption: true,
//                         describe: 'Poner un número para multiplicar la tabla.'
//                     })
//                     .option(
//                         'l', {
//                             alias:'list',
//                             type: 'boolean',
//                             default: false,
//                             describe: 'Listar la tabla de Multiplicación'
//                         }
//                     )
//                     .option(
//                         't',{
//                             alias: 'to',
//                             type: 'number',
//                             default: 10,
//                             describe: '¿Hasta que número quieres multiplicar? (Por default: 10)',
//                             demandOption: true
//                         }
//                     )
//                     .check( (argv, options ) => {
//                         if ( isNaN( argv.b ) ) throw 'Erorr: La base tiene que ser Número';
//                         return true
//                     } )
//                     .argv;

const argv = require('yargs')
                    .option({
                        'b': {
                            alias:'base',
                            type:'number',
                            demandOption: true,
                            describe: 'Poner un número para multiplicar la tabla.'
                        },
                        'l': {
                            alias:'list',
                            type: 'boolean',
                            default: false,
                            describe: 'Listar la tabla de Multiplicación'
                        },
                        't': {
                            alias: 'to',
                            type: 'number',
                            default: 10,
                            describe: '¿Hasta que número quieres multiplicar? (Por default: 10)',
                            demandOption: true
                        },
                    })
                    .check( (argv, options ) => {
                        if ( isNaN( argv.b ) ) throw 'Erorr: La base tiene que ser Número';
                        return true
                    } )
                    .argv;
                    
module.exports = {
    argv
};