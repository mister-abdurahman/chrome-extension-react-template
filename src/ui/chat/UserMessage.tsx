import { FaUser } from "react-icons/fa";

function UserMessage({ msg }: { msg: string }) {
  return (
    <div className="flex items-start gap-4 justify-start">
      <span className="basis-8 mt-2">
        <FaUser size={20} className="fill-green-500" />
      </span>
      <div className="bg-white shadow-2xl rounded-xl p-2 text-sm w-full">
        {msg}
      </div>
    </div>
  );
}

export default UserMessage;
