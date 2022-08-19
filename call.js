var user = {
    name : "Arun",
    age : 25,
    getName : function (surname) {
        console.log("user name is",  this.name, surname)

    }
}

var user2 = {
    name : "gopi",
    age : 26
}
//bind--inreturn function
user.getName("dhilla")

var x = user.getName.bind(user2)
x()


//call-- 

var x1 = user.getName.call(user2, "Nath")
x1()


//apply--array

var z = user.getName.apply(user2, ["Nath"])
z()


