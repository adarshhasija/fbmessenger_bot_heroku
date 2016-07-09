var indianSL_descriptions = require('./hearing_impaired/indianSL_descriptions')


module.exports = {
    letterToISLImage: letterToISLImage,
    letterToISLDescription: letterToISLDescription,
};



function letterToISLImage(letter) {
    switch(letter) {
      case 'a':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0",
                })
            var image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0";
            return image_url;
          break
      
      default:
          break
    }
}


function letterToISLDescription(letter) {
    switch(letter) {
      case 'a':
            var text = a_description;
            return text;
          break
      
      default:
          break
    }
}