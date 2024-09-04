import { Box, HStack, Image, Text } from "@chakra-ui/react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IEachAiDataUnit } from "../../utils/types";
import avatar from "../../assets/icon/ai_avatar_green.svg";

function AiMessage({ msg }: { msg: IEachAiDataUnit[] | string }) {
  return (
    <div className="flex items-start gap-4 justify-start">
      <span className="basis-12">
        <Image
          src={avatar}
          w={40}
          h={40}
          objectFit={"cover"}
          objectPosition={"center"}
        />
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

// function AiMessage({ msg }: { msg: IEachAiDataUnit2 | string }) {
//   return (
//     <div className="flex items-start gap-4 justify-start">
//       <span className="basis-12">
//         <Image
//           src={avatar}
//           w={40}
//           h={40}
//           objectFit={"cover"}
//           objectPosition={"center"}
//         />
//       </span>
//       <div className="bg-white shadow-2xl rounded-xl p-2 text-sm w-full space-y-2">
//         {typeof msg === "object" ? (
//           <Box className="bg-gray-100 rounded-xl p-3 border border-gray-300">
//             <Text fontWeight={"bold"}>
//               <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                 {msg.current_screen_description}
//               </ReactMarkdown>
//             </Text>
//             {msg.guidance.map((el) => (
//               <HStack justifyContent={"flex-start"}>
//                 <Text>
//                   <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                     {el.step}
//                   </ReactMarkdown>
//                 </Text>
//                 <Text>
//                   <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                     {el.instruction}
//                   </ReactMarkdown>
//                 </Text>
//               </HStack>
//             ))}
//             <HStack justifyContent={"flex-start"}>
//               <Text>{msg.additional_notes}</Text>
//             </HStack>
//           </Box>
//         ) : (
//           <Text>{msg}</Text>
//         )}
//       </div>
//     </div>
//   );
// }

export default AiMessage;
