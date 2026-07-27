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



function showStatus(message) {

    status.innerText = message;

    status.style.display = "block";

}



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
                "This platform is not supported yet."
            );

            return;

        }


        analyzeButton.disabled =
            true;


        analyzeButton.innerText =
            "🔍 Checking...";


        showStatus(
            `Detected ${platform}. Preparing video...`
        );


        // FRONTEND DEMO ONLY
        // Backend will be connected later.


        setTimeout(() => {

            videoTitle.innerText =
                `${platform} Video`;

            videoPlatform.innerText =
                `${platform} • Ready to process`;


            result.style.display =
                "block";


            status.innerText =
                "Video detected successfully.";


            analyzeButton.disabled =
                false;


            analyzeButton.innerText =
                "🔍 Analyze";


        }, 1000);

    }
);



downloadButton.addEventListener(
    "click",
    () => {

        alert(
            "The download system is not connected yet. We will connect the backend next."
        );

    }
);
