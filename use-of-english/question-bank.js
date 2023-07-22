//These are the questions of the test
var questions = [
    {text: "<b>Lucy: </b>*What* is your name? <br><b>Mark:</b>My name's Mark.", id:1, answer: ["is"], level: 1},
    {
        text: "<b>Paul: </b>___ you so much for your help. <br><b>Lucy: </b> You're welcome",
        id: 2,
        answer: ["Thank"],
        level: 1,
        options: ["Nothing", "Please", "Thank", "Sorry"]
    },
     {text: "<b>Bob:</b>When *is* your birthday?<br><b>Ashley:</b>It's on April 4th.", id:3, answer: ["is"], level: 1},
    {text: "<b>John: </b>*How* old are you? <br><b>Linda: </b>I'm 20 years old", id:4, answer: ["How"], level: 1}, 
    {text: "<b>Paul: </b>What *do* you do for a living?<br><b>Steve: </b> I'm a lawyer. ", id:5, answer: ["do"], level: 2},
    {text: "<b>Graig: </b>*Where* are you from?<br><b>Maria: </b>I'm *from* Spain.<br><b>Graig: </b>Really? I thought you were from Mexico.", id:6, answer: ["Where","from"], level: 2},
    {text: "<b>Karen: </b>Where *does* he live now?<br> <b>Thomas: </b>He lives in Barcelona.", id:7, answer: ["does"], level: 2},
    {
        text: "<b>Student 1: </b>____ is that man over there?<br><b>Student 2: </b>He's Paul, our new English teacher.",
        id: 8,
        answer: ["who"],
        level: 2,
        options: ["What", "When", "Who", "Where"]
    },
    {
        text: "<b>Teacher: </b>Whose pencil ___ this? <br><b>Student: </b> I think it's Bob's",
        id: 9,
        answer: ["is"],
        level: 3,
        options: ["are", "does", "do", "is"]
    },
    {
        text: "George has two kids, but he doesn't live with ____. They live with their mother",
        id: 10,
        answer: ["them"],
        level: 3,
        options: ["their", "them", "him", "their"]
    },
    {text: "<b>Peter: </b> Now tell me about your sister. How many children does *she* have?<br><b>Jude: </b> She *has* two sons and a daughter", id:11, answer: ["she","has"], level: 3},
    {text: "<b>John: </b>Do you know Paul McCartney?<br><b>Paul: </b> No, I don't know *him*. Who is he?", id:12, answer: ["him"], level: 4},
    {text: "<b>Barbara: </b>What *was* your favorite TV program when you were a kid?", id:13, answer: ["was"], level: 4},
    {text: "<b>Jessica: </b>*Did* you go shopping yesterday?<br><b>Andrew: </b>No, I didn't. but I'll go shopping tonight.", id:14, answer: ["did"], level: 4},
    {
        text: "<b>William: </b>How ___ does it take you to get to work in your car?</br><b>Sarah: </b>About 20 minutes in my car.",
        id: 15,
        answer: ["long"],
        level: 4,
        options: ["long", "time", "many", "old"]
    },
    {text: "My name's Joe, and I want *to* tell you a little *about* myself. I live in a small town called Greenfield. I'm *a* high school student and I love learning new things. In *my* free time, I enjoy reading books and watching movies. I also like going for walks in the park and playing soccer *with* my friends. I have a pet dog named Max, and he's my best friend. He can't live without me, and I can't live without him either. I think pets make life more interesting. What about you? Do you think pets make life more enjoyable?", id:16, answer: ["to", "about", "a", "my", "with"], level: 5},
    {text: "Hi everyone! I'm Mark and I am *an* engineer. I work for a company named 'Future Tech'. I began working there 3 years *ago*, and I really like my job. I love it because I learn about new technologies and I like my co-workers. They *are* awesome! I live in the city and I like its vibrant energy. In my spare time, I like *to* read books, especially those related to science and technology. I also love to play chess *with* my friends and go for jogs in the morning. I believe staying healthy is as important as working hard.", id:17, answer: ["an", "ago", "are", "to","with"], level: 5},
    {text: "Hi, I'm Billy, and I'd like *to* talk a little *about* myself. I work as *a* gardener in a large park in the city. I love my job because I always enjoy being around nature. I live in a small house near the park. Last year, I adopted a cat from the local animal shelter. She's called Misty and she's now my best friend. We spend a lot *of* time together, especially when I get home from work. Sometimes we sit in the garden and watch the birds until it gets dark. *On* Saturdays, we always watch movies until midnight. Misty loves being on the sofa, and I love watching comedy movies with her", id:18, answer: ["to", "about","a", "of", "on"], level: 5},
      {
        text: "<b>Susan: </b>What ___ your father look like?</br><b>Jessica: </b>He's tall with short, gray hair and wears glasses. He always has a friendly smile on his face",
        id: 19,
        answer: ["does"],
        level: 6,
        options: ["do", "does", "is", "are"]
    },
    {
        text: "<b>Bob: </b>What ___ she like?<br><b>Peter: </b>She's charismatic and really funny!",
        id: 20,
        answer: ["is"],
        level: 6,
        options: ["do", "does", "is", "are"]
    },
    {
        text: "<b>Lisa: </b>What ___ he like?<br><b>Martha: </b>He was generous and kind.",
        id: 21,
        answer: ["was"],
        level: 6,
        options: ["did", "was", "does", "were"]
    },
    {text: "<b>Interviewer: </b>*Is* there anything you'd like to ask?<br><b>Interviewee: </b>Yes, how *much* is the pay for this job?<br><b>Interviewer: </b>This position pays $4,000 a month.", id:22, answer: ["is","much"], level: 7},
    {text: "<b>Mark: </b>How *many* people *are* there at the party now?<br><b>Paul: </b>Around nine or ten", id:23, answer: ["many","are"], level: 7},
    {text: "<b>Charles: </b>Hey Nancy, why are you buying all that food?<b><br>Nancy: </b>There *will* *be* a party in my house tomorrow. You should come.<br><b>Charles: </b>Sure, I will. Thank you.", id:24, answer: ["will","be"], level: 7},
    {text: "<b>Detective: </b>What *were* you doing yesterday at 2:00 p.m.?</br><b>Suspect: </b>I *was* taking a nap.", id:25, answer: ["were"], level: 8},
    {text: "<b>Mom: </b>What *was* your brother doing when I got home this morning?</br><b>Son: </b>He *was* playing videogames.", id:26, answer: ["was","was"], level: 8},
    {text: "<b>Susan: </b>*Was* it raining when you got home last night?</br><b>John: </b>I don't remember. I rarely notice anything when I'm tired, and I *was* exhausted last night.", id:27, answer: ["was","was"], level: 8},
    {
        text: "<b>Kate: </b>What ____ tonight?</br> <b>Bob: </b>Nothing. I got no plans yet",
        id: 28,
        answer: ["are you doing"],
        level: 9,
        options: ["are you doing", "are you do", "do you do", "did you do"]
    },
    {
        text: "The hospital is ___ the bank",
        id: 29,
        answer: ["opposite"],
        level: 9,
        options: ["in front", "opposite", "next", "among"]
    },
    {
        text: "The books are ___ top of the shelf",
        id: 30,
        answer: ["on"],
        level: 9,
        options: ["on", "in", "under", "between"]
    },
    {
        text: "<b>Linda: </b> You ___ buy shoes in a library.",
        id: 31,
        answer: ["can't"],
        level: 10,
        options: ["should", "must", "are able", "can't"]
    },
    {
        text: "You _____ wear a uniform to school on Fridays. You know it's not mandatory. It's up to you.",
        id: 32,
        answer: ["don't have to"],
        level: 10,
        options: ["couldn't", "must", "don't have to", "shouldn't"]
    },
    {
        text: "I'm sorry I ____ submit the report on time yesterday. My computer broke down.",
        id: 33,
        answer: ["couldn't"],
        level: 10,
        options: ["couldn't", "shouldn't", "can", "can't"]
    },
    {
        text: "There isn't ____ sugar in the pantry to bake a cake, we need to buy some.",
        id: 33,
        answer: ["couldn't"],
        level: 11,
        options: ["enough", "many", "some", "too much"]
    },
    {
        text: "There aren't ____ apples left in the fruit bowl, it looks like we've eaten them all",
        id: 33,
        answer: ["any"],
        level: 11,
        options: ["some", "the", "an", "any"]
    },
];