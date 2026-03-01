// import { useState } from "react";
// import { Handle, Position } from "reactflow";
// import { BaseNode } from "./BaseNode";

// export const OutputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.outputName || `output_1`);
//   const [outputType, setOutputType] = useState(data?.outputType || "Text");

//   return (
//     <BaseNode title="Output" subtitle="Input" color="bg-rose-500">
//       <div className="space-y-3">
//         <div>
//           <label className="text-xs font-semibold text-slate-600">Name</label>
//           <input
//             className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-200"
//             value={currName}
//             onChange={(e) => setCurrName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="text-xs font-semibold text-slate-600">Type</label>
//           <select
//             className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-200"
//             value={outputType}
//             onChange={(e) => setOutputType(e.target.value)}
//           >
//             <option value="Text">Text</option>
//             <option value="Image">Image</option>
//           </select>
//         </div>
//       </div>

//       <Handle type="target" position={Position.Left} id={`${id}-value`} style={{ background: "#f43f5e" }} />
//     </BaseNode>
//   );
// };

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      title="Output"
      subtitle="Input"
      variant="red"
      leftHandles={[{ id: `${id}-value`, position: Position.Left, top: "50%" }]}
      rightHandles={[]}
    >
      <div className="space-y-2">
        <div>
          <div className="text-xs text-slate-600 mb-1">Name</div>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-300"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </div>

        <div>
          <div className="text-xs text-slate-600 mb-1">Type</div>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-300"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};