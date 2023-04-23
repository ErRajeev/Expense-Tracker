const express = require('express')
const bodyParser = require('body-parser')
const App = new express();
const cors = require('cors')
App.use(bodyParser.json());
App.use(cors())

const expenses = [
    {
        id: 1,
        title: 'Tea',
        amount: 1500,
        desc: 'Tea, Biscuits, Cake, Chocolate'
    },
    {
        id: 2,
        title: 'Clothes',
        amount: 3800,
        desc: 'Jeans, Shirts, T-Shirts'
    },
    {
        id: 3,
        title: 'Traveling',
        amount: 6300,
        desc: 'Madurai, Manali, Goa'
    },
]

// App.get('/', (req, res) => {
//     // res.send('<h1>Hello Rajeev </h1>')
// })


App.get('/expenses', (req, res) => {
    res.send(expenses);
})


// App.get('/expenses/:id', (req, res) => {
//     const id = req.params.id
//     let result;
//     for (let i = 0; i < expenses.length; i++) {
//         if (expenses[i].id == id) {
//             result = expenses[i];
//             break;
//         }
//     }
//     if (result) {
//         res.send(result)
//     } else {
//         res.send(`404 Not Found`)
//     }
// })


// App.get('/expense', (req, res) => {
//     let arr = [];
//     for (let i = 0; i < expenses.length; i++) {
//         if (expenses[i].amount > 200) {
//             arr.push(expenses[i])
//         }
//     }
//     res.send(arr)
// })


// App.post('/expenses', (req, res) => {
//     let newId = expenses[expenses.length - 1].id + 1;
//     let newExpenses = req.body;
//     newExpenses.id = newId;
//     expenses.push(newExpenses);
//     res.send(`Expenses Added`);
// })


// App.delete('/expenses/:id', (req, res) => {
//     let id = req.params.id;
//     for (let i = 0; i < expenses.length; i++) {
//         if (expenses[i].id == id) {
//             expenses.splice(i, 1);
//             res.send(`Deleted ✌️`)
//             break;
//         }
//         else {
//             res.send(`Not Found 😥`)
//         }
//     }
// })


// App.put('/expenses/:id', (req, res) => {
//     let id = req.params.id;
//     for (let i = 0; i < expenses.length; i++) {
//         if (expenses[i].id == id) {
//             if (req.body.title) {
//                 expenses[i].title = req.body.title;
//             }
//             if (req.body.amount) {
//                 expenses[i].amount = req.body.amount;
//             }
//             if (req.body.desc) {
//                 expenses[i].desc = req.body.desc;
//             }
//         } else {
//             res.send(`Id Not Found`)
//         }
//     }
// })

App.listen(3000, () => {
    console.log('Server is Running .....');
})