const { describe } = require('yargs');

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'es la base de la tabla de multiplicar'

  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10   ,
    describe: 'este es el numero hasta donde quieres la tabla'

  })

  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe:'muesta la tabla en consola'
  })

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero'

    }
    return true
  })
  .argv;



  module.exports = argv