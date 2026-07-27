const videoUrl =
    document.getElementById("videoUrl");

const analyzeButton =
    document.getElementById("analyzeButton");

const downloadButton =
    document.getElementById("downloadButton");

const quality =
    document.getElementById("quality");

const status =
    document.getElementById("status");

const result =
    document.getElementById("result");

const videoTitle =
    document.getElementById("videoTitle");

const videoPlatform =
    document.getElementById("videoPlatform");

const thumbnail =
    document.getElementById("thumbnail");


// Your Cloudflare Worker

const VIDEO_API =
    "https://gamermaid-video-api.tze-oms.workers.dev/";



// Show messages

function showStatus(message) {

    status.innerText = message;

    status.style.display = "block";

}



// Detect platform

function detectPlatform(url) {

    if (
        url.includes("youtube.com") ||
        url.includes("youtu.be")
    ) {
        return "YouTube";
    }


    if (
        url.includes("tiktok.com")
    ) {
        return "TikTok";
    }


    if (
        url.includes("instagram.com")
    ) {
        return "Instagram";
    }


    if (
        url.includes("facebook.com") ||
        url.includes("fb.watch")
    ) {
        return "Facebook";
    }


    return null;

}



// Analyze button

analyzeButton.addEventListener(
"click",
async () => {


    const url =
        videoUrl.value.trim();



    if (!url) {

        showStatus(
            "Please paste a video URL first."
        );

        return;

    }



    const platform =
        detectPlatform(url);



    if (!platform) {

        showStatus(
            "Unsupported platform."
        );

        return;

    }



    analyzeButton.disabled = true;

    analyzeButton.innerText =
        "🔍 Checking...";


    showStatus(
        "Connecting to Gamermaid API..."
    );



    try {


        const response =
            await fetch(
                VIDEO_API,
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                        "application/json"
                    },


                    body:
                    JSON.stringify({
                        url:url
                    })

                }
            );



        const data =
            await response.json();



        if (!response.ok) {

            showStatus(
                data.error ||
                "API error"
            );

            return;

        }




        // Display result


        videoTitle.innerText =
            data.title ||
            `${data.platform} Video`;



        videoPlatform.innerText =
            `${data.platform} • Ready`;



        if (data.thumbnail) {

            thumbnail.src =
                data.thumbnail;

        }



        result.style.display =
            "block";



        showStatus(
            "Video information loaded!"
        );



    }

    catch(error) {


        console.error(error);


        showStatus(
            "Connection failed."
        );


    }



    finally {


        analyzeButton.disabled =
            false;


        analyzeButton.innerText =
            "🔍 Analyze";


    }



});





// Download button

downloadButton.addEventListener(
"click",
() => {


    const selectedQuality =
        quality.value;



    alert(
        `Download requested: ${selectedQuality}p\n\nBackend download system will be connected next.`
    );


});
