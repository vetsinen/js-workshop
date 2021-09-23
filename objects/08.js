function Event(name,start,end){//!Upcase
    this.name = name
    this.start = start
    this.end = end
    this.duration = function (){//function in object
    }
}

const event1 = new Event("Digital Вівторок","2021-08-31","2021-08-31")
console.log(event1)

const event2 = {name:"Swarm Learning", date:"2021-08-30", fee: 42}
console.log(event2)

const location = {"place": " INVERIA Event Space", "city": "Kyiv"}

event2.location = location
console.log(event2)

const events = [event1, event2]
console.log(events)