const beginRecording = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
      mediaSource: "screen",
    },
  });

  var video = [];

  const mediaRecorder = new MediaRecorder(stream);

  const startResponse = await fetch(
    "https://ubong-inyang.onrender.com/api/videos",
    {
      method: "POST",
    }
  );
  const videoId = await startResponse.json();

  mediaRecorder.start(10 * 1000);

  mediaRecorder.ondataavailable = async (e) => {
    console.log(e.data);
    video.push(e.data);

    const fileReader = new FileReader();

    let base64String;

    fileReader.readAsDataURL(e.data);
    fileReader.onload = async function (event) {
      base64String = event.target.result.split(",")[1];

      const uploadResponse = await fetch(
        `https://ubong-inyang.onrender.com/api/videos/${videoId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            chunk: base64String,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const uploadJSON = await uploadResponse.json();
      console.log(uploadJSON);
    };
  };

  mediaRecorder.onstop = async (stream) => {
    // stream.getTrack().array.forEach((element) => {
    //   if (element.readyState === "live") {
    //     element.stop();
    //   }
    // });
    console.log(video, "recording stopped");

    try {
      const response = await fetch(
        `https://ubong-inyang.onrender.com/api/videos/${videoId}/end_recording`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: `Video-${Date.now()}`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("video streaming completed successfully.");
        window.open(`http://localhost:5173/videos/${videoId}`, "_blank");
      } else {
        console.error(
          "failed to send data",
          response.status,
          response.statusText
        );
      }
    } catch (err) {
      console.error("Error sending data", err);
    }
  };
};

beginRecording();

// var port = chrome.runtime.connect();

// window.addEventListener(
//   "message",
//   (event) => {
//     // We only accept messages from ourselves
//     if (event.source !== window) {
//       return;
//     }

//     if (event.data.type && event.data.type === "FROM_PAGE") {
//       console.log("Content script received: " + event.data.text);
//       port.postMessage(event.data.text);
//     }
//   },
//   false
// );

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   // Check if the message is meant for your content script.
//   console.log("received message");

//   if (message.action === "triggerRecording") {
//     // Call your function when the message is received.
//     console.log("Recording is starting");
//     beginRecording();
//     sendResponse(`processed : ${message.action}`);
//   }
// });
