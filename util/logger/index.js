import 'date-format'
import 'date-utils'
import log4js from 'log4js'
const date = new Date();


const config =
{
    appenders:
    {
        app: {type: 'file', filename: `./logs/${date.toYMD()}.log`},
    },
    categories:
    {
        default: { appenders: ['app'], level: 'trace'}
    }
}

log4js.configure(config)
const logger = log4js.getLogger('app');

export default logger