const startRecording = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
      mediaSource: "screen",
    },
  });

  var video = [];

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (e) => {
    video.push(e.data);
  };

  mediaRecorder.start();

  mediaRecorder.onstop = async (stream) => {
    stream.getTrack().array.forEach((element) => {
      if (element.readyState === "live") {
        element.stop();
      }
    });
    console.log(video, "recording stopped");
    const blob = new Blob(video, { type: "video/x-matroska;codecs=avc1" });

    try {
      const response = await fetch(
        "https://ubong-inyang.onrender.com/api/videos",
        {
          method: "POST",
          body: blob,
          headers: {
            "Content-Type": "video/x-matroska;codecs=avc1",
          },
        }
      );
      if (response.ok) {
        console.log("data sent successfully");
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

startRecording();

var port = chrome.runtime.connect();

window.addEventListener(
  "message",
  (event) => {
    // We only accept messages from ourselves
    if (event.source !== window) {
      return;
    }

    if (event.data.type && event.data.type === "FROM_PAGE") {
      console.log("Content script received: " + event.data.text);
      port.postMessage(event.data.text);
    }
  },
  false
);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message is meant for your content script.
  console.log("received message");

  if (message.action === "triggerRecording") {
    // Call your function when the message is received.
    console.log("Recording is starting");
    startRecording();
    sendResponse(`processed : ${message.action}`);
  }
});
