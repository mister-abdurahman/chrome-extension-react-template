import user_avatar from "../../assets/icon/user_1_avatar.png";
import { Image } from "@chakra-ui/react";

function UserMessage({ msg }: { msg: string }) {
  return (
    <div className="flex items-start gap-4 justify-start">
      <span className="basis-12">
        <Image
          src={user_avatar}
          w={40}
          h={40}
          objectFit={"cover"}
          objectPosition={"center"}
        />
      </span>
      <div className="bg-white shadow-2xl rounded-xl p-2 text-sm w-full">
        {msg}
      </div>
    </div>
  );
}

export default UserMessage;
