Object.defineProperty(exports, "__esModule", {
  value: true,
});
export default Popup;
var _logo = _interopRequireDefault(require("../assets/logo.png"));
var _setting = _interopRequireDefault(require("../assets/setting-2.png"));
var _closeCircle = _interopRequireDefault(
  require("../assets/close-circle.png")
);
var _monitor = _interopRequireDefault(require("../assets/monitor.png"));
var _copy = _interopRequireDefault(require("../assets/copy.png"));
var _videoCamera = _interopRequireDefault(
  require("../assets/video-camera.png")
);
var _microphone = _interopRequireDefault(require("../assets/microphone.png"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function Popup() {
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "w-[18.75rem] shadow-md mx-auto p-4 rounded-lg",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "flex justify-between items-center",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "flex gap-2 items-center",
          },
          /*#__PURE__*/ React.createElement("img", {
            className: "w-[1.75rem]",
            src: _logo["default"],
            alt: "",
          }),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              className: "font-bold",
            },
            "HelpMeOut"
          )
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "flex gap-2",
          },
          /*#__PURE__*/ React.createElement("img", {
            src: _setting["default"],
            alt: "",
          }),
          /*#__PURE__*/ React.createElement("img", {
            src: _closeCircle["default"],
            alt: "",
          })
        )
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        {
          className: "text-center w-full pt-3",
        },
        "This extension helps you record and share help videos with ease."
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "flex py-8 justify-around ",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "flex flex-col font-bold",
          },
          /*#__PURE__*/ React.createElement("img", {
            className: "w-fit mx-auto",
            src: _monitor["default"],
            alt: "",
          }),
          /*#__PURE__*/ React.createElement("p", null, "Full screen")
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "flex flex-col font-bold",
          },
          /*#__PURE__*/ React.createElement("img", {
            className: "w-fit mx-auto",
            src: _copy["default"],
            alt: "",
          }),
          /*#__PURE__*/ React.createElement("p", null, "Current Tab")
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        null,
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className:
              "flex justify-between border-2 border-black px-2 rounded-md py-4",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "flex items-center gap-2 font-bold",
            },
            /*#__PURE__*/ React.createElement("img", {
              src: _videoCamera["default"],
              alt: "",
            }),
            /*#__PURE__*/ React.createElement("span", null, "Camera")
          ),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              className: "relative  h-8 w-14 cursor-pointer",
            },
            /*#__PURE__*/ React.createElement("input", {
              type: "checkbox",
              id: "AcceptConditions",
              className: "peer sr-only",
            }),
            /*#__PURE__*/ React.createElement("span", {
              className:
                "absolute  inset-0 rounded-full bg-gray-900 transition peer-checked:bg-green-500",
            }),
            /*#__PURE__*/ React.createElement("span", {
              className:
                "absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6",
            })
          )
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className:
              "flex justify-between border-2 py-4 rounded-md mt-2 px-2 border-black items-center",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "flex items-center gap-2 font-bold",
            },
            /*#__PURE__*/ React.createElement("img", {
              src: _microphone["default"],
              alt: "",
            }),
            /*#__PURE__*/ React.createElement("span", null, "Audio")
          ),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              className: "relative  h-8 w-14 cursor-pointer",
            },
            /*#__PURE__*/ React.createElement("input", {
              type: "checkbox",
              id: "AcceptConditions",
              className: "peer sr-only",
            }),
            /*#__PURE__*/ React.createElement("span", {
              className:
                "absolute  inset-0 rounded-full bg-gray-900 transition peer-checked:bg-green-500",
            }),
            /*#__PURE__*/ React.createElement("span", {
              className:
                "absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6",
            })
          )
        )
      ),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          className:
            "p-4 text-center w-full font-bold mt-4 rounded-3xl bg-blue-900",
        },
        " ",
        "Start Recording"
      )
    )
  );
}
