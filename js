<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://unpkg.com/@tensorflow/tfjs"></script>
    <script src="https://unpkg.com/@tensorflow-models/mobilenet"></script>
    <link rel="stylesheet" href="index.css">
    <title>Image Classify</title>
</head>

<body>
    <div>
        <h1>Image Classifier</h1>
        <div id="console"></div>
        <div class="form">
            <form id="form1" runat="server">
                <label for="imageUpload" class="upload-label">Choose<br></label>
                <input type='file' id="imgSrch" onchange="readURL(this);" />
            </form>
        </div>

        <div>
            <img id="witcher" src="https://static.cdprojektred.com/thewitcher.com/media/wallpapers/witcher3/full/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png" alt="your image" height="224"
                width="224" />
        </div>
        <div class="button">
            <button type="button" id="btn-predict">Predict!</button>
        </div>

        <div class="loader"></div>
        <h3 id="result"></h3>
    </div>
    <script src="index.js"></script>
</body>

</html>
