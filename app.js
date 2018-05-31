const PNGImage = require('pngjs-image');

PNGImage.readImage('a.png', function (err1, aImage) {
    if (err1) throw err1;
    PNGImage.readImage('rgb.png', function (err2, rgbImage) {
        if (err2) throw err2;
        const newImage = PNGImage.createImage(aImage.getWidth(), aImage.getHeight());
        for (let i = 0; i < aImage.getWidth() * aImage.getHeight(); i++) {
            newImage.setRed(i, rgbImage.getRed(i));
            newImage.setGreen(i, rgbImage.getGreen(i));
            newImage.setBlue(i, rgbImage.getBlue(i));
            newImage.setAlpha(i, aImage.getRed(i));
        }

        newImage.writeImage('rgba.png', function (err) {
            if (err) throw err;
            console.log('Written to rgba.png');
        });
    });
});