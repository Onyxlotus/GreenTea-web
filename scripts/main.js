var myImage = document.querySelector('#first-slide');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first-slide.jpg') {
      myImage.setAttribute ('src','images/second-slide.jpg');
    } else {
      myImage.setAttribute ('src','images/first-slide.jpg');
    }
}
