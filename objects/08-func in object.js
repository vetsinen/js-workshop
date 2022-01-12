const event1 = {name:"Swarm Learning", date:"2021-08-30", fee: 42}
console.log(event1)

function Event(name,start,end){//!Upcase
    this.name = name
    this.start = start
    this.end = end
    this.duration = function (){//function in object
        return  Math.abs(new Date(this.end) - new Date(start)) / 36e5 /24
    }
}

const event2 = new Event("Digital Вівторок","2021-01-01","2021-01-08")
console.log(event2.duration())

// const location = {"place": " INVERIA Event Space", "city": "Kyiv"}

// event2.location = location
// console.log(event2)
//
// const events = [event1, event2]
// console.log(events)