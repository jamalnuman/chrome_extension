



//chrome.runtime.onMessage.addListener(gotMessage)//this is the code that will receive the message from the background.js file. 'gotmessage' is a callback function  

//function alterContent
  //if(message.txt === "hello"){
  // function change(string){
  //   var array = [];
  //   let allElements = document.querySelectorAll("*");
  //   console.log(allElements)
  //   for(elt of allElements){
  //     if(elt.innerHTML.includes(string)){
  //       array.push(elt)
  //       console.log(array)
  //     }
  //   }for(elt of array){
  //     elt.style['background-color'] = "green"
  //   }
  // }

  // change("instructor")
  
  // function change(string){
  //   var array = [];
  //   let allElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a");
  //   //console.log(allElements)
  //   for(elt of allElements){
  //     if(elt.innerHTML.includes(string)){
  //       array.push(elt)
  //       //console.log(array)
  //       //console.log(elt)
  //     }
  //   }for(var i = 0; i < array.length; i++){
  //     //console.log(array[i])
  //     array[i].innerHTML = "Jamal!"
  //   }
  // }

  // change("BATMAN")

 
  
  // function change(...array){
  //   for(elt of array){
  //     eval("document.body.innerHTML = document.body.innerHTML.replace(/" + elt + "/gi, 'Jamal');");
  //   }
  // }

  //    change("BATMAN", "Bruce")


  // function restore_options() {
  //   var word_to_search = chrome.storage.sync.get({
  //     censoredWords: 'hi'
  //   }, function(items) {
  //     document.getElementById('hi').value = items.censoredWords;
  //   });

  //   return word_to_search

  // }


     
  
  function getInnerText(el) {
    var text;
    var firstChild = el.firstChild;

    if (firstChild) {
      text = firstChild.nodeValue;
    }
    
    if (text) {
      return text.trim();
    } else {
      return "";
    }
  }

  function removeWords(...bannedWords){
    var elements = document.querySelectorAll('body *')

    elements.forEach(function(element) { 
      bannedWords.forEach(function(bannedWord) {
        if (getInnerText(element).toLowerCase().indexOf(bannedWord.toLowerCase()) !== -1) {
          element.style.backgroundColor = 'black';
          element.style.color = 'black';
        }
      });
    });
  }


  removeWords("sources", "batman", "quarterbacks");

//document.body.style.backgroundColor = "red"










//document.body.contentEditable = true...turns the webpage into a word document. 
//document.getElementById("demo").innerHTML = "Paragraph changed!";