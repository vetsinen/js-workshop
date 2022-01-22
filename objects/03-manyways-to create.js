const track1 = {name: "Single Ladies"}
console.log(typeof track1, track1.name)

function TrackFunc(name){//CAPS
    this.name = name
}
const track2 = new TrackFunc("Single Ladies")
console.log(typeof track2, track2.name)

class TrackClass{//CAPS
    duration
    genre

    constructor(name) {
        this.name = name
    }
}
const track3 = new TrackClass("Single Ladies")
console.log(typeof track3, track3)
