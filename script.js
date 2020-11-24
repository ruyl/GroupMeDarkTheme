const yourNicknames = ['Andrew Kump', 'Irelia one trick btw', 'Drevv', 'Brovid-19', 'Andwemw 4.2.0'];
let cachedLength = 0;

function checkDOMChange() {
  let nicknameElements = document.getElementsByClassName('nickname');

  // Do we have anything new? 
  if (nicknameElements.length !== cachedLength) {
    cachedLength = nicknameElements.length;
    for (element of nicknameElements) {
      if (yourNicknames.includes(element.textContent)) {
        let messageElement = element.closest('.message');
        if (messageElement) {
          messageElement.setAttribute('style', 'background-color: #292a2d !important;');
        }
      }
    }
  }
  setTimeout(checkDOMChange, 100);
}

checkDOMChange();