


// import { useEffect, useMemo, useRef, useState } from "react";
// import { Position } from "reactflow";
// import { BaseNode } from "./BaseNode";

// const VAR_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || "{{input}}");
//   const textareaRef = useRef(null);

//   const variables = useMemo(() => {
//     const found = new Set();
//     let match;
//     while ((match = VAR_REGEX.exec(currText)) !== null) found.add(match[1]);
//     VAR_REGEX.lastIndex = 0;
//     return Array.from(found);
//   }, [currText]);

//   useEffect(() => {
//     const el = textareaRef.current;
//     if (!el) return;
//     el.style.height = "auto";
//     el.style.height = `${Math.min(200, Math.max(80, el.scrollHeight))}px`;
//   }, [currText]);

//   return (
//     <BaseNode
//       title="Text"
//       subtitle=""
//       variant="blue"
//       leftHandles={variables.map((v, idx) => ({
//         id: `${id}-${v}`,
//         position: Position.Left,
//         top: `${30 + idx * 18}%`,
//       }))}
//       rightHandles={[{ id: `${id}-output`, position: Position.Right, top: "50%" }]}
//       width={260}
//     >
//       {variables.length > 0 && (
//         <div className="mb-2 flex flex-wrap gap-2">
//           {variables.map((v) => (
//             <span
//               key={v}
//               className="text-xs px-2 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800"
//             >
//               {v}
//             </span>
//           ))}
//         </div>
//       )}

//       <div>
//         <div className="text-xs text-slate-600 mb-1">Text</div>
//         <textarea
//           ref={textareaRef}
//           value={currText}
//           onChange={(e) => setCurrText(e.target.value)}
//           placeholder="Type text... use {{variable}}"
//           className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 resize-none"
//         />
//       </div>
//     </BaseNode>
//   );
// };

import { useEffect, useMemo, useRef, useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store"; // ✅ store path correct ఉందో చూసుకో

const VAR_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  // ✅ Extract variables like {{name}}
  const variables = useMemo(() => {
    const found = new Set();
    let match;

    while ((match = VAR_REGEX.exec(currText)) !== null) {
      found.add(match[1]);
    }

    VAR_REGEX.lastIndex = 0; // reset for /g/
    return Array.from(found);
  }, [currText]);

  // ✅ auto resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${Math.min(200, Math.max(80, el.scrollHeight))}px`;
  }, [currText]);

  const onChangeText = (e) => {
    const val = e.target.value;
    setCurrText(val);

    // ✅ Important: node data store update (so other parts + submit payload gets latest text)
    updateNodeField(id, "text", val);
  };

  return (
    <BaseNode
      title="Text"
      subtitle=""
      variant="blue"
      leftHandles={variables.map((v, idx) => ({
        // ✅ handle id should be variable name (easy to connect)
        id: v,
        position: Position.Left,

        // ✅ IMPORTANT: use px, not %
        top: `${64 + idx * 26}px`,
        label: v, // (optional) BaseNode supports label if you render it
      }))}
      rightHandles={[
        { id: "output", position: Position.Right, top: "50%" },
      ]}
      width={300}
    >
      {variables.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {variables.map((v) => (
            <span
              key={v}
              className="text-xs px-2 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800"
            >
              {v}
            </span>
          ))}
        </div>
      )}

      <div>
        <div className="text-xs text-slate-600 mb-1">Text</div>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={onChangeText}
          placeholder="Type text... use {{variable}}"
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 resize-none"
        />
      </div>
    </BaseNode>
  );
};