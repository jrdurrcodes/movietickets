/**
 * select a movie
 * get # of tickets
 * multiply # of tickets by ticket price
 */

let data = {
    movie: '',
    totalTickets: 0,
    price: 10.79,
    total: 0
}

const toggleDisplay = document.getElementById('toggleDisplay')
let tickets = 0

toggleDisplay.innerText = tickets

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    updateData()
    
} )

const updateData =()=> {
    const movie = document.querySelector('select{name="movie"]').value

    const totalTickets = parseInt(document.getElementById('totalTickets').value)
    
    data.movie = movie
    data.totalTickets = totalTickets
    data.total = data.totalTickets * data.price

    return data
}

const getTicketAmt = (id)=> {
    const totalTickets = document.getElementById('totalTickets')




    if (id == 'add') {
        tickets++
    }else if (id == 'subtract' && tickets > 0) {
        tickets
    }

    toggleDisplay,innerText = tickets

    totalTickets.value = tickets

    return tickets
    }

    const togglers = document.querySelectorAll('toggler')

    togglers.forEach(toggler => {
        toggler.addEventListener('click', ()=> {
            getTicketAmt(toggler.id)
        })
    })


