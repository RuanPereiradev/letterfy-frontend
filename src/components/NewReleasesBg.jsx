// import React from "react";
// import { motion } from "framer-motion";

// const NewReleasesBg = ({ albums }) => {
//   return (
//     <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
//       <motion.div
//         className="flex space-x-10 animate-scroll"
//         initial={{ x: "100%" }}
//         animate={{ x: "-100%" }}
//         transition={{
//           repeat: Infinity,
//           duration: 20,
//           ease: "linear",
//         }}
//       >
//         {albums.map((album, index) => (
//           <img
//             key={index}
//             src={album.images?.[0]?.url || "fallback-image.jpg"}
//             alt={album.name}
//             className="w-60 h-60 object-cover rounded-lg shadow-lg"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default NewReleasesBg;
