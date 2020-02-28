

// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab){
//   let msg = {
//     txt: "hello"
//   }
//   chrome.tabs.sendMessage(tab.id, msg)//this is how you send a message to the content script from the background script. You are using the sendMessage action...and remember that each tab has an id, which can be taken from the tab object. So you are sending a message to the specific tab opened. the content script will receive the message in the parameter labeled "message"
function fieldsControl () {
  console.log('fieldsControl envoked')
  var counter = 0;
  var add = document.getElementById('add');
  var remove = document.getElementById('remove');
  var form = document.getElementById('userInput');
  var addInput = function() {
    counter++;
    var input = document.createElement("input");
    input.type = 'text';
    input.value = '';
    form.appendChild(input);
  };
  var removeInput = function() {
    console.log('hii')
    counter -= 1;
    var input = document.getElementById('userInput').removeChild(userInput.childNodes[userInput.childNodes.length - 1]);
  };
  add.addEventListener('click', function() {
    addInput();
  }.bind(this));
  remove.addEventListener('click', function() {
    removeInput();
  }.bind(this));
};

function save_options() {
  console.log('save options envoked')
  var userInput = document.getElementById('userInput').value;

  chrome.storage.local.set({
    censoredWords: userInput
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'HEY THIS SAVED';
  });
}

  

function restore_options() {
  console.log('restore_options envoked')
  chrome.storage.local.get(['censoredWords'], function(items) {
    console.log('Value currently is ' + items.key);
    document.getElementById('userInput').value = items.censoredWords;
  });

}

document.addEventListener('DomContentLoaded', restore_options);
var el = document.getElementById('save')
if(el){
  el.addEventListener('click', save_options);
}

// document.addEventListener('DOMContentLoaded', function () {
    // el.addEventListener('click', swapper, false);
//});
// var el = document.getElementById('overlayBtn');
// if(el){
//   el.addEventListener('click', swapper, false);
// }