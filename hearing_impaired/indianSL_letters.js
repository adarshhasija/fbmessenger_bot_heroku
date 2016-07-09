module.exports = {
    letterToISLImage: letterToISLImage,
    letterToISLDescription: letterToISLDescription,
};


function letterToISLImage(sender, letter) {
    switch(letter) {
      case 'a':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0",
                })
            var image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0";
            return 
          break
      
      default:
          break
    }
}


function letterToISLDescription(letter) {
    switch(letter) {
      case 'a':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0",
                })
            var text = "Raise both your hands with fingers pointing up and palms pointing away from you. Extend both your thumbs so that"+
                                    "the tips are touching. Finally curl all your other fingers inwards";
            return text;
          break
      
      default:
          break
    }
}