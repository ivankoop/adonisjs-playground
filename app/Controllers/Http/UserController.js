'use strict'

class UserController {

    index({request}) {

        console.log("como estan todos")

        return "holis aca"
    }

    create({request}) {
        return "create aca"
    }

    insert({request}) {
        return "inset aca"
    }

    profile({request}) {

        return "profile"
    }

}

module.exports = UserController
