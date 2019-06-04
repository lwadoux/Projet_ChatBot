//Submit messages and fetch bot replies
const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');
form.addEventListener(‘submit’, (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = ‘’;
});

function botready() {
    console.log("Bot loaded");
    bot.sortReplies();
    let username = "local-user";
    bot.reply(username, "Hello, bot!").then(reply).catch(replyerror);
}

function reply(){
  message_container.innerHTML += `<div class=”bot”>${message}</div>`;
  location.href = ‘#edge’;
}
function selfReply() {
  message_container.innerHTML += `<div class=”self”>${message}</div>`;
  location.href = ‘#edge’;
}

function loaderror(){
    console.log("Error loading bot");
}

function replyerror(){
    console.log("Error reply bot");
}
