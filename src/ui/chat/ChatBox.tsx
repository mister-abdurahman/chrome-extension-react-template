import BoxHead from "./BoxHead";
import { useState } from "react";
import UserMessage from "./UserMessage";
import AiMessage from "./AiMessage";
import { talkToAi } from "../../api/aiEndpoint";
import { chatType } from "../../utils/types";
import { Box, Image } from "@chakra-ui/react";
import send from "../../assets/icon/Send_duotone.svg";
import mic from "../../assets/icon/Mic_duotone_line.svg";
import user_avatar from "../../assets/icon/user_avatar.svg";

function ChatBox() {
  const [chats, setChats] = useState<chatType[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // ///////////////////////
  // const [stream, setStream] = useState<null | MediaStream>(null);
  // // const videoRef = useRef<LegacyRef<HTMLVideoElement> | null>(null);

  // const startScreenSharing = async () => {
  //   try {
  //     // Request display media (screen sharing)
  //     const mediaStream = await navigator.mediaDevices.getDisplayMedia({
  //       video: true,
  //       audio: false,
  //     });

  //     const mediaRecorder = new MediaRecorder(mediaStream, {
  //       mimeType: "video/webm; codecs=vp8",
  //     });

  //     mediaRecorder.ondataavailable = (event) => {
  //       if (event.data.size > 0) {
  //         socket.emit("video-data", event.data);
  //       }
  //     };

  //     mediaRecorder.start(1000); //interval to send data

  //     socket.on("connect", () => {
  //       console.log("Socket.IO connection established.");
  //     });

  //     socket.on("disconnect", () => {
  //       console.log("Socket.IO connection closed.");
  //     });

  //     socket.on("error", (error) => {
  //       console.error("Socket.IO error: ", error);
  //     });

  //     socket.on("received", (data) => {
  //       console.log("Server received data:", data);
  //     });

  //     // Set the media stream to the video element
  //     //   if (videoRef.current) {
  //     //     videoRef.current.srcObject = mediaStream;
  //     //   }

  //     // Save the media stream in state
  //     setStream(mediaStream);
  //   } catch (error) {
  //     console.error("Error accessing display media.", error);
  //   }
  // };

  // const stopScreenSharing = () => {
  //   if (stream) {
  //     // Stop all tracks in the stream
  //     stream.getTracks().forEach((track) => track.stop());
  //     setStream(null);

  //     socket.disconnect();
  //   }
  // };

  // ///////////////////////

  async function handleSendMsg() {
    if (!userInput) return alert("Enter a prompt !");
    setIsLoading(true);
    setError("");
    try {
      const res = await talkToAi(userInput);
      // const formatted = res.slice(7, -3);
      setChats((prev) => [...prev, { user: userInput, ai: JSON.parse(res) }]);
      setUserInput("");
    } catch (error) {
      setError("Sorry, an error occured!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (!userInput) return alert("Enter a prompt !");
      try {
        setIsLoading(true);
        setError("");
        const res = await talkToAi(userInput);
        // const formatted = res.slice(7, -3);
        setChats((prev) => [...prev, { user: userInput, ai: JSON.parse(res) }]);
        setUserInput("");
      } catch (error) {
        setError("Sorry, an error occured!");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  // const y = test.slice(7, -3);
  // console.log(JSON.parse(y));

  if (error) return <p className="text-xl text-center mt-6">{error}</p>;

  return (
    // <div className="py-3 border bg-gray-100 border-gray-500 rounded-lg absolute top-2 right-6 w-[35rem] h-[35rem] flex flex-col">
    <div className="h-full flex flex-col">
      <BoxHead
      // isStreaming={!!stream}
      // onStartShare={startScreenSharing}
      // onStopShare={stopScreenSharing}
      />
      <main className="px-6 py-4 my-8 overflow-auto space-y-3">
        {chats.map((el) => (
          <>
            <UserMessage msg={el.user} />
            <AiMessage msg={el.ai} />
          </>
        ))}
        {isLoading && (
          <>
            <UserMessage msg={userInput} />
            <p>Loading AI response...</p>
          </>
        )}
      </main>
      <footer className="flex items-center gap-4 mt-auto px-6 bg-slate-300">
        <Box bg={"green"} alignItems={"center"}>
          <Image src={user_avatar} w={48} h={48} />
        </Box>
        <div className="bg-white px-2 py-1 justify-between rounded-full flex items-center w-full">
          <input
            type="text"
            placeholder="What can I do for you today ?"
            className="bg-white px-4 py-1 rounded-full w-4/5"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <div className="flex items-center gap-2 p-1 border border-gray-400 rounded-full">
            <button
              disabled={isLoading || !userInput}
              className="disabled:cursor-not-allowed"
              onClick={handleSendMsg}
            >
              <Image src={send} w={26} h={26} />
            </button>
            <button
              disabled={isLoading || !userInput}
              className="disabled:cursor-not-allowed"
              onClick={handleSendMsg}
            >
              <Image src={mic} w={26} h={26} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ChatBox;
