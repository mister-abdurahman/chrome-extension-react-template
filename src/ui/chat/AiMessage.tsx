import { Box, HStack, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IEachAiDataUnit } from "../../utils/types";

// const dummy = [
//   {
//     title: "Step 1: Buy Beans",
//     description: [
//       "Go to the nearest market and purchase...",
//       "jiejhnbvieujfnmklv",
//     ],
//     view_more: "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
//   },
//   {
//     title: "Step 2: Cook Beans",
//     description: [
//       "Go to the nearest market and purchase...",
//       "jiejhnbvieujfnmklv",
//     ],
//     view_more: "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
//   },
// ];

function AiMessage({ msg }: { msg: IEachAiDataUnit[] | string }) {
  console.log(msg);
  return (
    <div className="flex items-start gap-4 justify-start">
      <span className="basis-8 mt-1">
        <FaRobot className="fill-purple-500" size={24} />
      </span>
      <div className="bg-white shadow-2xl rounded-xl p-2 text-sm w-full space-y-2">
        {typeof msg === "object" &&
          msg?.map((el, i) => (
            <Box
              key={i}
              className="bg-gray-100 rounded-xl p-3 border border-gray-300"
            >
              <Text fontWeight={"bold"}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {el.title}
                </ReactMarkdown>
              </Text>
              {el.description.map((el) => (
                <Text>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {el}
                  </ReactMarkdown>
                </Text>
              ))}
              <HStack justifyContent={"flex-end"}>View More</HStack>
            </Box>
          ))}
      </div>
    </div>
  );
}

export default AiMessage;
