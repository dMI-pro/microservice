import {createLogger, transports, format} from "winston"


export const customerLoggerInfo = createLogger({
    transports: [
        new transports.File({
            filename: './source/logs/out.log',
            level: 'info',
            format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm;ss'}), format.json())
        })
    ]
})
export const customerLoggerError = createLogger({
    transports: [
        new transports.File({
            filename: './source/logs/error.log',
            level: 'error',
            format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm;ss'}), format.json())
        })
    ]
})

