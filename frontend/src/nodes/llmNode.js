// import { Handle, Position } from "reactflow";
// import { BaseNode } from "./BaseNode";

// export const LLMNode = ({ id }) => {
//   return (
//     <BaseNode title="LLM" subtitle="Model" color="bg-violet-500">
//       <div className="text-sm text-slate-700">This is a LLM.</div>

//       <Handle type="target" position={Position.Left} id={`${id}-system`} style={{ top: "40%", background: "#8b5cf6" }} />
//       <Handle type="target" position={Position.Left} id={`${id}-prompt`} style={{ top: "65%", background: "#8b5cf6" }} />
//       <Handle type="source" position={Position.Right} id={`${id}-response`} style={{ background: "#8b5cf6" }} />
//     </BaseNode>
//   );
// };

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      subtitle="This is a LLM."
      variant="purple"
      leftHandles={[
        { id: `${id}-system`, position: Position.Left, top: "35%" },
        { id: `${id}-prompt`, position: Position.Left, top: "65%" },
      ]}
      rightHandles={[{ id: `${id}-response`, position: Position.Right, top: "50%" }]}
    >
      <div className="text-sm text-slate-700">
        Connect <b>system</b> + <b>prompt</b> → get <b>response</b>
      </div>
    </BaseNode>
  );
};