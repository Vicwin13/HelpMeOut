const startRecording = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: {
      mediaSource: "screen",
    },
  });

  const data = [];

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (e) => {
    data.push(e.data);
  };

  mediaRecorder.start();

  mediaRecorder.onstop = (e) => {
    console.log(data);
  };
};

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
