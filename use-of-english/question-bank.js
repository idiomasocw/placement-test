//These are the questions of the test
var questions = [
    {text: "<b>Lucy: </b>*What* is your name? <br><b>Mark:</b>My name's Mark.", id:1, answer: ["is"], level: 1},
    {text: "<b>Susan: </b>*Thank* you so much for your help.<br><b>Joe:</b>You're welcome", id:2, answer: ["Thank"], level: 1},
    {text: "<b>Bob:</b>When *is* your birthday?<br><b>Ashley:</b>It's on April 4th.", id:3, answer: ["is"], level: 1},
    {text: "<b>John: </b>*How* old are you? <br><b>Linda: </b>I'm 20 years *old*", id:4, answer: ["How","old"], level: 1},
    {text: "<b>Paul: </b>What do you *do* for a living?<br><b>Steve: </b> I'm a lawyer. ", id:5, answer: ["do"], level: 2},
    {text: "<b>Graig: </b>*Where* are you from?<br><b>Maria: </b>I'm *from* Spain.<br><b>Graig: </b>Really? I thought you were from Mexico.", id:6, answer: ["Where","from"], level: 2},
    {text: "<b>Karen: </b>Where *does* he live now?<br> <b>Thomas: </b>He lives in Barcelona.", id:7, answer: ["does"], level: 2},
    {text: "Whose pencil *is* this?", id:8, answer: ["is"], level: 2},
    {text: "<b>Student 1: </b>*Who* is that man over there?<br><b>Student 2: </b>He's Paul, our new English teacher.", id:9, answer: ["Who"], level: 3},
    {text: "<b>Kim: </b>George has two kids, but he doesn't live with *them*. They live with their mother<br><b>Carol: </b>Oh, I knew that.", id:10, answer: ["them"], level: 3},
    {text: "<b>Peter: </b> Now tell me about your sister. How many children does *she* have?<br><b>Jude: </b> She *has* two sons and a daughter", id:11, answer: ["she","has"], level: 3},
    {text: "<b>John: </b>Do you know Paul McCartney?<br><b>Paul: </b> No, I don't know *him*. Who is he?", id:12, answer: ["him"], level: 4},
    {text: "<b>Barbara: </b>What *was* your favorite TV program when you were a kid?", id:13, answer: ["was"], level: 4},
    {text: "<b>Jessica: </b>*Did* you go shopping yesterday?<br><b>Andrew: </b>No, I didn't.", id:14, answer: ["did"], level: 4},
    {text: "My name's Joe, and I want *to* tell you a little *about* myself. I live in a small town called Greenfield. I'm *a* high school student and I love learning new things. In *my* free time, I enjoy reading books and watching movies. I also like going for walks in the park and playing soccer *with* my friends. I have a pet dog named Max, and he's my best friend. He can't live without me, and I can't live without him either. I think pets make life more interesting. What about you? *Do* you think pets make life more enjoyable?", id:15, answer: ["to", "about", "a", "my", "with", "Do"], level: 5},
    {text: "Hi everyone! I'm Mark and I am *an* engineer. I work for a company named 'Future Tech'. I began working there like 3 years *ago*, and I really like my job. I love it because I learn *about* new technologies and I like my co-workers. They *are* awesome! I live in the city and I like its vibrant energy. In my spare time, I like *to* read books, especially those related to science and technology. I also love to play chess *with* my friends and go for jogs in the morning. I believe staying healthy is as important as working hard.", id:16, answer: ["an", "ago", "about", "are", "to","with"], level: 5},
    {text: "Hi, I'm Billy, and I'd like *to* talk a little *about* myself. I work as *a* gardener in a large park in the city. I love my job because I always enjoy being around nature. I live in a small house near the park. Last year, I adopted a cat from the local animal shelter. She's called Misty and she's now my best friend. We spend a lot *of* time together, especially when I get home from work. Sometimes we sit in the garden and watch the birds until it gets dark. *On* Saturdays, we watch movies until midnight. Misty loves being on the sofa, and I love watching comedy movies *with* her", id:17, answer: ["to", "about","a", "of", "on", "with"], level: 5},
    {text: "<b>Interviewer: </b>*Is* there anything you want to ask?<br><b>Interviewee: </b>Yes, I do have a question. How *much* is the pay for this job?<br><b>Interviewer: </b>This position pays $4,000 a month.", id:18, answer: ["is","much"], level: 6},
    {text: "<b>Mark: </b>How *many* people *are* there at the party now?<br><b>Paul: </b>Around nine or ten", id:19, answer: ["many","are"], level: 6},
    {text: "<b>Charles: </b>Hey Nancy, why are you buying all that food?<b><br>Nancy: </b>There *will* *be* a party in my house. You should come.<br><b>Charles: </b>Sure, I will. Thank you.", id:20, answer: ["will","be"], level: 6},
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
];