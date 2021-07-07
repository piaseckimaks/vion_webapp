import mssql from 'mssql'


export default async ( req, res )=>
{
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await mssql.connect('Server=10.52.128.46,1433;Database=SqlSniffer;User Id=sa;Password=wms;Encrypt=false')
        
        const result = await mssql.query`select count(t.TelegramId) as crate,  t.LOCATION, l.Description from Telegrams as t
                                        left join Location_FLS as l on  t.LOCATION = l.Location
                                        where t.DateTime > '20210705 10:50:00.000'
                                        and t.DateTime < '20210706 11:50:00.000'
                                        and t.TelName = 'TSSM'
                                        group by t.Location, l.Description
                                        order by t.LOCATION;`
        
        res.json(result.recordset)

        mssql.close()
    } catch (err) {
        // ... error checks
        console.log(err)
        res.status(500)
    }
}