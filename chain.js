const users = [
    {id: 1, name: 'Abul', job: 'doctor'}
]

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'Leader'},
        {id: 2, name: 'Dabul', job: 'Engineer'}
    ]
}
// console.log(data.data[1].job);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'Third floor'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    }
}
console.log(user.address.street.first);