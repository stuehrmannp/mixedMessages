const motivationalMessages = ['You can do it!', 'There is another way!', 'You got big things ahead of you!','You are going to be great!', 'You are going to make it!'];
const funnyWords = ['Bugha', 'lol', 'hippie', 'Lard', 'dude', 'punk', 'scrub', 'dad', 'oldie'];
const names = ['Clown', 'Personal chef', 'Boss', 'Hawk', 'leader', 'christian', 'priest'];

let randomizer = Math.floor(Math.random() * motivationalMessages.length);

 let message = `Hey there ${names[randomizer]}, just wanted to tell you: ${motivationalMessages[randomizer]}! Keep it up, ${funnyWords[randomizer]}`;

