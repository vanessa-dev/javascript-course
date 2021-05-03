class Transaction{
    constructor({customer,car, dueDate, amount}){
        this.customer = customer
        this.car = car
        this.dueDate = dueDate
        this.amount = amount

    }
}

module.exports = Transaction;