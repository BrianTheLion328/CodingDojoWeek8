const faker = require("faker")
const express = require("express")
const app = express();
const PORT = 8000

const createUser = () => {
    const userObj = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
        }

        console.log(userObj)
        return userObj;
}

const createCompany = () => {
    const companyObj = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }

    console.log(companyObj)
    return companyObj;
}

const newUserAndCompany = () => {
    const newUser = createUser()
    const newCompany = createCompany()
    const userAndCompany = [newUser, newCompany]

    return userAndCompany;
}

app.get("/api/users/new", (req, res) => {
    res.send( createUser() )
})

app.get("/api/companies/new", (req, res) => {
    res.send( createCompany() )
})

app.get("/api/user/company", (req, res) => {
    res.send( newUserAndCompany() )
})

app.listen( PORT, () => console.log(`Listening on port: ${PORT}!`) )
