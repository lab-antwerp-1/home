# favicon

## A favicon is a small image displayed next to the page title in the browser tab

It is a small image, so it should be a simple image with high contrast

To add a favicon to your website, either save your favicon image to the root directory of your webserver, or create a folder in the root directory called images, and save your favicon image in this folder. A common name for a favicon image is "favicon.ico" Next, add a `link` element to your "index.html" file, after the `title` element, like this

<!DOCTYPE html>
    <html lang="en">
     <head>
        <title>My Page Title</title>
          link rel="icon" type="image/x-icon" href="/images/favicon.ico">
       </head>
    <body>

    <h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
