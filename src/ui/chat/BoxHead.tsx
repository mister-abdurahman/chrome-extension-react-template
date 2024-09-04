// import ai_avatar from "../../assets/icon/ai_avatar_green.svg";
import question from "../../assets/icon/Question_light.svg";
import send_square from "../../assets/icon/send-square-white.svg";
import size_right_up from "../../assets/icon/Size_right_up_light.svg";
import mute_sound from "../../assets/icon/sound_mute_light.svg";
import drag from "../../assets/icon/drag_icon.svg";
import { Box, HStack, Image } from "@chakra-ui/react";

function BoxHead({
  isStreaming,
  onStartShare,
  onStopShare,
}: {
  isStreaming?: boolean;
  onStartShare?: () => Promise<void>;
  onStopShare?: () => void;
}) {
  return (
    <div className="p-4 flex justify-between items-center">
      <Box>
        <Image src={drag} />
      </Box>
      <HStack gap={"1rem"}>
        <Image src={question} />
        <Image src={mute_sound} />
        <Image src={size_right_up} />
        <button
          onClick={isStreaming ? onStopShare : onStartShare}
          className="bg-red_500 rounded-full flex items-center px-6 py-3 mr-4 text-white text-sm gap-2"
        >
          <Image src={send_square} />{" "}
          <p>{isStreaming ? "Stop" : "Start"} Sharing Screen</p>
        </button>
      </HStack>
    </div>
  );
}

export default BoxHead;
