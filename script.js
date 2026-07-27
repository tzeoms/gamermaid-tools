const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const button = document.getElementById("process");
const download = document.getElementById("download");

let selectedFile;


input.addEventListener("change", () => {

    selectedFile = input.files[0];

    if (!selectedFile) return;

    preview.src = URL.createObjectURL(selectedFile);
    preview.style.display = "block";

});


button.addEventListener("click", async () => {

    if (!selectedFile) {
        alert("Upload an image first");
        return;
    }


    button.innerText = "AI Processing...";
    button.disabled = true;


    const formData = new FormData();

    formData.append(
        "image",
        selectedFile
    );


    try {

        const response = await fetch(
            "https://gamermaid-ai-api.tze-oms.workers.dev/",
            {
                method: "POST",
                body: formData
            }
        );


        if (!response.ok) {

            const error =
                await response.text();

            console.log(error);

            alert(
                "AI failed: " + error
            );

            button.innerText =
                "✨ Enhance Image";

            button.disabled = false;

            return;
        }


        const blob =
            await response.blob();


        const resultURL =
            URL.createObjectURL(blob);


        preview.src =
            resultURL;


        download.href =
            resultURL;


        download.download =
            "gamermaid-enhanced.png";


        download.style.display =
            "inline-block";


        button.innerText =
            "✨ Enhance Image";


        button.disabled =
            false;


    } catch(error) {

        console.log(error);

        alert(
            "Connection error"
        );


        button.innerText =
            "✨ Enhance Image";

        button.disabled =
            false;
    }

});
