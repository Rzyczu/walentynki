document.getElementById('yesBtn').addEventListener('click', function () {
    // Create an image element
    var image = document.createElement('img');

    // Set the source attribute to the path of your photo (photo1.png)
    image.src = 'img_yes.jpg';

    // Set any additional attributes or styles as needed
    image.style.width = '100%'; // Adjust the width if necessary
    image.style.height = 'auto'; // Maintain aspect ratio

    // Append the image to the document body or any other container
    document.body.appendChild(image);
});

function runaway(button) {
    // Calculate random position offsets
    var topOffset = Math.round(Math.random() * 250) - 100;
    var leftOffset = Math.round(Math.random() * 250) - 200;

    // Apply the new position to the button
    button.style.position = 'relative';
    button.style.top = topOffset + 'px';
    button.style.left = leftOffset + 'px';
}
