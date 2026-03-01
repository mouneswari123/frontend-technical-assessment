

// import { Handle } from "reactflow";

// const colorMap = {
//   green: {
//     head: "bg-emerald-500",
//     body: "bg-emerald-50",
//     ring: "border-emerald-200",
//     dot: "bg-emerald-200",
//   },
//   blue: {
//     head: "bg-blue-500",
//     body: "bg-blue-50",
//     ring: "border-blue-200",
//     dot: "bg-blue-200",
//   },
//   orange: {
//     head: "bg-orange-500",
//     body: "bg-orange-50",
//     ring: "border-orange-200",
//     dot: "bg-orange-200",
//   },
//   purple: {
//     head: "bg-violet-600",
//     body: "bg-violet-50",
//     ring: "border-violet-200",
//     dot: "bg-violet-200",
//   },
//   red: {
//     head: "bg-rose-500",
//     body: "bg-rose-50",
//     ring: "border-rose-200",
//     dot: "bg-rose-200",
//   },
//   teal: {
//     head: "bg-teal-600",
//     body: "bg-teal-50",
//     ring: "border-teal-200",
//     dot: "bg-teal-200",
//   },
// };

// export const BaseNode = ({
//   title,
//   subtitle,
//   variant = "blue",
//   width = 240,
//   children,
//   leftHandles = [],
//   rightHandles = [],
// }) => {
//   const c = colorMap[variant] || colorMap.blue;

//   return (
//     <div style={{ width }} className={`rounded-2xl border ${c.ring} shadow-md overflow-hidden`}>
//       {/* Header */}
//       <div className={`${c.head} text-white px-4 py-2 flex items-center gap-2`}>
//         <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
//         <div className="font-semibold">{title}</div>
//       </div>

//       {/* Body */}
//       <div className={`${c.body} px-4 py-3 relative`}>
//         {subtitle ? <div className="text-slate-700 text-sm mb-2">{subtitle}</div> : null}
//         {children}

//         {/* Left handles */}
//         {leftHandles.map((h) => (
//           <Handle
//             key={h.id}
//             type="target"
//             position={h.position}
//             id={h.id}
//             style={{
//               background: "#0f172a",
//               border: "2px solid white",
//               width: 10,
//               height: 10,
//               left: -6,
//               top: h.top,
//             }}
//           />
//         ))}

//         {/* Right handles */}
//         {rightHandles.map((h) => (
//           <Handle
//             key={h.id}
//             type="source"
//             position={h.position}
//             id={h.id}
//             style={{
//               background: "#0f172a",
//               border: "2px solid white",
//               width: 10,
//               height: 10,
//               right: -6,
//               top: h.top,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

import { Handle } from "reactflow";

const colorMap = {
  green: { head: "bg-emerald-500", body: "bg-emerald-50", ring: "border-emerald-200", dot: "bg-emerald-200" },
  blue: { head: "bg-blue-500", body: "bg-blue-50", ring: "border-blue-200", dot: "bg-blue-200" },
  orange: { head: "bg-orange-500", body: "bg-orange-50", ring: "border-orange-200", dot: "bg-orange-200" },
  purple: { head: "bg-violet-600", body: "bg-violet-50", ring: "border-violet-200", dot: "bg-violet-200" },
  red: { head: "bg-rose-500", body: "bg-rose-50", ring: "border-rose-200", dot: "bg-rose-200" },
  teal: { head: "bg-teal-600", body: "bg-teal-50", ring: "border-teal-200", dot: "bg-teal-200" },
};

export const BaseNode = ({
  title,
  subtitle,
  variant = "blue",
  width = 240,
  children,
  leftHandles = [],
  rightHandles = [],
}) => {
  const c = colorMap[variant] || colorMap.blue;

  return (
    <div
      style={{ width }}
      className={`relative rounded-2xl border ${c.ring} shadow-md overflow-visible`}
    >
      {/* Header */}
      <div className={`${c.head} text-white px-4 py-2 flex items-center gap-2 rounded-t-2xl`}>
        <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
        <div className="font-semibold">{title}</div>
      </div>

      {/* Body */}
      <div className={`${c.body} px-4 py-3 relative rounded-b-2xl`}>
        {subtitle ? <div className="text-slate-700 text-sm mb-2">{subtitle}</div> : null}
        {children}

        {/* Left handles */}
        {leftHandles.map((h) => (
          <Handle
            key={h.id}
            type="target"
            position={h.position}
            id={h.id}
            style={{
              position: "absolute",
              background: "#0f172a",
              border: "2px solid white",
              width: 12,
              height: 12,
              borderRadius: 9999,
              left: -10,
              top: h.top,            // ✅ px recommended
              transform: "translateY(-50%)",
            }}
          />
        ))}

        {/* Right handles */}
        {rightHandles.map((h) => (
          <Handle
            key={h.id}
            type="source"
            position={h.position}
            id={h.id}
            style={{
              position: "absolute",
              background: "#0f172a",
              border: "2px solid white",
              width: 12,
              height: 12,
              borderRadius: 9999,
              right: -10,
              top: h.top,            // ✅ px recommended
              transform: "translateY(-50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};