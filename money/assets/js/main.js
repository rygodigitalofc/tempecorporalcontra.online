let contage = $('#contage')
let date = $('#date')

date.text(getData())
contage.text(peopleWatching(contage))

function getData () {
    let data = new Date()
    day = data.getDate(),
    month = data.getMonth() + 1,
    year = data.getFullYear()

    day = day < 10 ? "0" + day : day
    month = month < 10 ? "0" + month : month

    return [day, month, year].join('/')
}

function peopleWatching(contage) {
    let counter = 0
    let contageNumber = parseInt(contage.text())
    const timer = setInterval(function() {
        counter += 21

        contage.text(contageNumber + counter)
    
        
        if(parseInt(contage.text()) >= 1060) {
            clearInterval(timer)
            
            const newTimer = setInterval(function(){
                let newContageNumber = parseInt(contage.text())
                if(newContageNumber < 1060) {
                    let number = 1 + Math.floor(Math.random() * 10)
                    parseInt(contage.text(newContageNumber + number))
                } else {
                    let numberNegative = 1 - Math.floor(Math.random() * 10)
                    parseInt(contage.text(newContageNumber + numberNegative))
                }
            }, 5000)
        }
    }, 3000)
}
