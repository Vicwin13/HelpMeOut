import edit from "../assets/edit.png";
import copy from "../assets/copy.png";
export default function ReadyVideo() {
  return (
    <>
      <div>
        <section>
          <h1>Your Video is ready</h1>

          <div>
            <p>Name</p>
            <div>
              <p> untitled_video_id</p>
              <img src={edit} alt="" />
            </div>
            <div className="relative">
              <input type="email" id="" />
              <button className="absolute inset-y-0 right-5">Send</button>
            </div>

            <div>
              <h1>Video Url</h1>
              <div>
                <p>https://ahucauuiauauigciiaca/aspioha</p>
                <button>
                  <img src={copy} alt="" /> copy
                </button>
              </div>
            </div>
          </div>
          <div>
            <button>Facebook</button>
            <button> WhatsApp</button>
            <button>Telegram</button>
          </div>
        </section>
        <section>This section for the video preview</section>
      </div>
      <div>
        <p>
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </p>
        <button>Save Video</button>
        <p> Don't have and account?</p> <span> Create account</span>
      </div>
    </>
  );
}
