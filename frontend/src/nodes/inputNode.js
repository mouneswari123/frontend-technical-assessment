// import { useState } from "react";
// import { Handle, Position } from "reactflow";
// import { BaseNode } from "./BaseNode";

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.inputName || `input_1`);
//   const [inputType, setInputType] = useState(data?.inputType || "Text");

//   return (
//     <BaseNode title="Input" subtitle="Input Data" color="bg-emerald-500">
//       <div className="space-y-3">
//         <div>
//           <label className="text-xs font-semibold text-slate-600">Name</label>
//           <input
//             className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
//             value={currName}
//             onChange={(e) => setCurrName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="text-xs font-semibold text-slate-600">Type</label>
//           <select
//             className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
//             value={inputType}
//             onChange={(e) => setInputType(e.target.value)}
//           >
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </div>
//       </div>

//       <Handle type="source" position={Position.Right} id={`${id}-value`} style={{ background: "#10b981" }} />
//     </BaseNode>
//   );
// };

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      subtitle="Input Data"
      variant="green"
      leftHandles={[]}
      rightHandles={[{ id: `${id}-value`, position: Position.Right, top: "50%" }]}
    >
      <div className="space-y-2">
        <div>
          <div className="text-xs text-slate-600 mb-1">Name</div>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-300"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </div>

        <div>
          <div className="text-xs text-slate-600 mb-1">Type</div>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-300"
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};