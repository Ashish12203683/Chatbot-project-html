function talk(){
    var know = {
    "Hi " : "Good morning,Sastrikal,parnam.What can i do for you",
    "Who are you" : "I am boat created by Ashish kumar singh ",
    "Display a jock" : "ok,Here is a jock i thing this will help you to laugh",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "Who generate you" : "Ashish kumar singh ",
    "What are the key features of Python" : "Python is an interpreted language. That means that, unlike languages like C and its variants, Python does not need to be compiled before it is run. Other interpreted languages include PHP and Ruby.<br>Python is dynamically typed, this means that you don’t need to state the types of variables when you declare them or anything like that. "
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }