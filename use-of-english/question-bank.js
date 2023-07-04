//These are the questions of the test
var questions = [
    {text: "Where *are* you from?", id:1, answer: ["are"], level: 1},
    {text: "*Where* are you from?</br>I'm *from* Spain.", id:2, answer: ["where","from"], level: 2},
    {text: "When *is* your birthday?", id:3, answer: ["is"], level: 2},
    {text: "Who *are* your parents?", id:4, answer: ["are"], level: 2},
    {text: "How *often* do you go to the doctor?", id:19, answer: ["often"], level: 3, audioUrl:"https://ocw-moodle.s3.sa-east-1.amazonaws.com/Audio/Level+A1/Lesson+3/Father.mp3"},
    {text: "Where *does* he live now?", id:5, answer: ["does"], level: 3},
    {text: "What do you *do* for a living?</br>I'm a lawyer.", id:6, answer: ["do"], level: 3},
    {text: "I don't work *on* Fridays", id:20, answer: ["on"], level: 4, audioUrl:"https://ocw-moodle.s3.sa-east-1.amazonaws.com/Audio/Level+A1/Lesson+3/Father.mp3"},
    {text: "Whose pencil *is* this?", id:7, answer: ["is"], level: 4},
    {text: "*Where* do you live</br>I live downtown.", id:8, answer: ["where"], level: 4},
    {text: "Who *is* your favorite singer?", id:9, answer: ["is"], level: 5, audioUrl:"https://ocw-moodle.s3.sa-east-1.amazonaws.com/Audio/Level+A1/Lesson+3/Father.mp3"},
    {text: "The check-in counter *is* the place *at* the airport where you go to *check-in*. You *go* there and show your ticket and passport, give your baggage *to* the airline staff, and get *your* boarding pass. A boarding pass is \"a *pass* for boarding an airplane\". It's *a* special ticket that you receive when you check-in. It shows your name, flight number, *and* seat number.", id:16, answer: ["is", "at", "check-in", "go", "to", "your", "pass", "a", "and"], level: 6},
    {text: "Where *did* you sleep last night?", id:16, answer: ["did"], level: 6},
    {text: "When *was* the last time you visited a nice restaurant?", answer: ["was"], level: 7},
    {text: "I don't usually work *on* Fridays?", answer: ["on"], level: 8},
    {text: "*Have* you ever been to the US?", answer: ["have"], level: 9},
    {text: "I need more paper. Please give me *another* piece of paper.", answer: ["another"], level: 10},
    {text: "What *were* you doing yesterday at 3:00 p.m.?", answer: ["were"], level: 11},
    {text: "What *will* you probably do when you retire?", answer: ["will"], level: 12},
    {text: "What wouldn't you do if you *were* the opposite sex?", answer: ["were"], level: 13},
    {text: "I'm not going to that party. I *would* rather stay home.", answer: ["would"], level: 14},
    {text: "If you *had* arrived earlier, you wouldn't have missed the plane.", answer: ["had"], level: 14},
    {text: "Paul's been *burning* the midnight oil all these days.", answer: ["burning"], level: 15},
    {text: "You'll need an umbrella, it's raining *cats* and dogs.", answer: ["cats"], level: 15},
    {text: "The check-in counter *is* the place *at* the airport where you go to *check-in*. You *go* there and show your ticket and passport, give your baggage *to* the airline staff, and get *your* boarding pass. A boarding pass is \"a *pass* for boarding an airplane\". It's *a* special ticket that you receive when you check-in. It shows your name, flight number, *and* seat number.", id:16, answer: ["is", "at", "check-in", "go", "to", "your", "pass", "a", "and"], level: 15}
];