import { useEffect, useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Videos() {
  const [urlStream, setUrlStream] = useState([]);

  useEffect(() => {
    fetch("https://ubong-inyang.onrender.com/api/videos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data objct", data);
        setUrlStream(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    console.log("Url stresm", urlStream);
  }, [urlStream]);

  return (
    <>
      <Navbar />
      <div className=" mr-[6.75rem] ml-[6.75rem] py-10">
        <div className="grid grid-cols-2 place-center gap-4">
          {urlStream?.map((stream) => {
            return (
              <div key={stream.id}>
                <video width="400" controls>
                  <source src={stream?.video_url} type="video/webm" />
                </video>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
