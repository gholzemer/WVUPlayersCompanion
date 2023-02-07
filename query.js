function queryString(str) {

    var data;

    const sql = require('mssql');

    const config = {
        user: 'azureuser', // better stored in an app setting such as process.env.DB_USER
        password: 'WVUrms12', // better stored in an app setting such as process.env.DB_PASSWORD
        server: 'wvurms.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
        port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
        database: 'RMS APP', // better stored in an app setting such as process.env.DB_NAME
        authentication: {
            type: 'default'
        },
        options: {
            encrypt: true
        }
    }

    console.log("Starting...");
    data = connectAndQuery();

    async function connectAndQuery() {
        try {
            var poolConnection = await sql.connect(config);

            console.log("Reading rows from the Table...");
            var resultSet = await poolConnection.request().query(str);

            console.log(`${resultSet.recordset.length} rows returned.`);

            // close connection only when we're certain application is finished
            poolConnection.close();

            let ret = JSON.stringify(resultSet); // Parsing data from DB in order to produce usable and parsable data            
            var b = ret.indexOf("recordset\":",b) + 14;
            var out = "";
            for (let i = 0; i < resultSet.recordset.length; i++) {
                b = ret.indexOf(":",b);
                let c = ret.indexOf(",",b);
                let e = ret.indexOf("}",b);
                while (b <= e) {
                    let field = ret.substring((b + 1), c);
                    out += (field + ";");
                    b = ret.indexOf(":",b + 1);
                    c = ret.indexOf(",",b);
                }

                len = out.length;
                out = out.substring(0, (len - 3));
                out += "\n";
            }

            out = out.replace(/"/g,"");

            return out;
                

        } catch (err) {
            console.error(err.message);
        }
    }

    return data;
}


queryString(`SELECT * FROM [dbo].[Exercises]`).then(function(results){
    console.log(results);
});



