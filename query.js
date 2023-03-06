function queryString(str) { // Function to return entries in a table based on a string SQL command.

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
            var b = ret.indexOf("recordset\":", b) + 14;
            var out = "";
            for (let i = 0; i < resultSet.recordset.length; i++) {
                b = ret.indexOf(":", b);
                let c = ret.indexOf(",", b);
                let e = ret.indexOf("}", b);
                while (b <= e) {
                    let field = ret.substring((b + 1), c);
                    out += (field + ";");
                    b = ret.indexOf(":", b + 1);
                    c = ret.indexOf(",", b);
                }

                var len = out.length;
                out = out.substring(0, (len - 3));
                out += "\n";
            }

            out = out.replace(/"/g, "");

            return out;


        } catch (err) {
            console.error(err.message);
        }
    }

    return data;
}

export function login(user, pass) { // Function to check login credentials and return the name of the user as well as the type of user they are
    let string = "SELECT Password, UserType, FirstName, UserId FROM [dbo].[Users] WHERE Username = \'" + user + "\'";
    queryString(string).then(function (results) {
        const fields = results.split(';');
        if (pass === fields[0]) {
            return (fields[1] + ";" + fields[2] + ";" + fields[3]);
        }
        else {
            return "D";
        }
    });
}

export function roster() { // Function to return the full roster of players
    let string = "SELECT FirstName, LastName, PlayerNumber FROM [dbo].[Users] WHERE UserType = \'P\'";
    queryString(string).then(function (results) {
        return results;
    });
}

export function Assigned(userId) { // Function to return a players assigned programs
    let string = "SELECT RoutineId, Notes FROM [dbo].[Assignments] WHERE UserId = \'" + userId + "\'";
    queryString(string).then(function (results) {
        const fields = results.split(';');
        let rout = "SELECT RoutineName, ExerciseIds, SetNums, RepNums FROM [dbo].[Routines] WHERE RoutineId = \'" + fields[0] + "\'";
        queryString(rout).then(function (set) {
            return (set + "!" + fields[1]);
        });
        return results;
    });
}

export function GetRoutines() { // Pulls a complete list of all the general routines
    let string = "SELECT RoutineId, RoutineName FROM [dbo].[Routines] WHERE Visible = 1 ORDER BY RoutineName";
    queryString(string).then(function (results) {
        return results;
    });
}

export function RoutineDetails(RoutId) { // Returns the associated exercises and details for a particular routine
    let string = "SELECT RoutineName, ExerciseIds, SetNums, RepNums FROM [dbo].[Routines] WHERE RoutineId = \'" + RoutId + "\'";
    queryString(string).then(function (results) {
        return results;
    });
}

export function GetExercise(exId) { // Function to return the details of an exercise using its Id Number
    let string = "SELECT ExerciseName, Link, Description FROM [dbo].[Exercises] WHERE ExerciseId = \'" + exId + "\'";
    queryString(string).then(function (results) {
        return results;
    });
}

export function GetVideo(exId) {
    let string = "SELECT Link FROM [dbo].[Exercises] WHERE ExerciseId = \'" + exId + "\'";
    queryString(string).then(function (results) {
        return results;
    });
}
export function GetVideo2(exercise) {
    let string = "SELECT Youtube FROM [dbo].[Graphics] WHERE Exercise = \'" + exercise + "\'";
    queryString(string).then(function (results) {
        return results;
    });
}
export function AddExercise(name, link, descript) { // Function for trainer to add exercise
    if (name === "") {
        return "Invalid Name";
    }
    let dupCheck = "SELECT * FROM [dbo].[Exercises] WHERE ExerciseName = \'" + name + "\'";
    queryString(dupCheck).then(function (results) {
        if (results === "") {
            let string = "Insert Into [dbo].[Exercises] values (\'" + name + "\',\'" + link + "\',\'" + descript + "\')";
            string = string.replace(/\'\'/g, "null");
            queryString(string).then(function (results) {
                return results;
            });
        }
        else {
            return "Exercise Name Already Exists";
        }
    });
}

export function AddUser(fname, mname, lname, username, password, number, type, code) { // Function for trainer to add a new user such as a player or student assistant
    if (fname == "" || lname == "" || username == "" || password == "") {
        return "Empty Fields";
    }
    let dupCheck = "SELECT * FROM [dbo].[Users] WHERE UserName = \'" + username + "\'";
    queryString(dupCheck).then(function (results) {
        if (results === "") {
            let string = "Insert Into [dbo].[Users] values (\'" + fname + "\',\'" + mname + "\',\'" + lname + "\'" + type + "\',\'" + username + "\',\'" + password + "\',\'" + number + "\',\'" + code + "\')";
            string = string.replace(/\'\'/g, "null");
            queryString(string).then(function (results) {
                return results;
            });
        }
        else {
            return "User Already Exists";
        }
    });
}

let access = AddExercise("Shoul Press", "", "");
console.log(access);

//queryString(`SELECT * FROM [dbo].[Exercises]`).then(function(results){
  //  console.log(results);
//});
