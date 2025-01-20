const winston = require('winston');
require('express-async-errors');

module.exports = function(){
    winston.configure({
        format: winston.format.simple(),
        exceptionHandlers: [
            new winston.transports.Console({format: winston.format.simple()}),
            new winston.transports.File({filename: 'uncaughtExceptions.log'})
        ]
    });

    winston.add(new winston.transports.File({filename : 'logfile.log'}));
    winston.add(new winston.transports.Console({format: winston.format.simple()}));
}