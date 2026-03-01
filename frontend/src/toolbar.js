// import { DraggableNode } from "./draggableNode";

// const Dot = ({ className }) => (
//   <span className={`h-3 w-3 rounded-full ${className}`} />
// );

// export const PipelineToolbar = () => {
//   return (
//     <div className="flex flex-col gap-3">
//       <DraggableNode type="customInput" label="Input" icon={<Dot className="bg-emerald-500" />} />
//       <DraggableNode type="llm" label="LLM" icon={<Dot className="bg-violet-500" />} />
//       <DraggableNode type="customOutput" label="Output" icon={<Dot className="bg-rose-500" />} />
//       <DraggableNode type="text" label="Text" icon={<Dot className="bg-blue-500" />} />

//       {/* Extra nodes you added */}
//       <DraggableNode type="number" label="Number" icon={<Dot className="bg-orange-500" />} />
//       <DraggableNode type="merge" label="Merge" icon={<Dot className="bg-slate-600" />} />
//       <DraggableNode type="delay" label="Delay" icon={<Dot className="bg-teal-500" />} />
//       <DraggableNode type="condition" label="Condition" icon={<Dot className="bg-fuchsia-500" />} />
//       <DraggableNode type="api" label="API" icon={<Dot className="bg-cyan-500" />} />
//     </div>
//   );
// };

import { DraggableNode } from "./draggableNode";

const Dot = ({ className = "" }) => (
  <span className={`inline-block h-2.5 w-2.5 rounded-full ${className}`} />
);

export const PipelineToolbar = () => {
  return (
    <div className="flex flex-col gap-3">
      <DraggableNode
        type="customInput"
        label="Input"
        icon={<Dot className="bg-emerald-500" />}
      />
      <DraggableNode
        type="llm"
        label="LLM"
        icon={<Dot className="bg-violet-500" />}
      />
      <DraggableNode
        type="customOutput"
        label="Output"
        icon={<Dot className="bg-rose-500" />}
      />
      <DraggableNode
        type="text"
        label="Text"
        icon={<Dot className="bg-blue-500" />}
      />

      {/* Extra nodes you added (optional). If your nodeTypes has them, keep these. */}
      <DraggableNode type="number" label="Number" icon={<Dot className="bg-orange-500" />} />
      <DraggableNode type="merge" label="Merge" icon={<Dot className="bg-slate-500" />} />
      <DraggableNode type="delay" label="Delay" icon={<Dot className="bg-teal-500" />} />
      <DraggableNode type="condition" label="Condition" icon={<Dot className="bg-fuchsia-500" />} />
      <DraggableNode type="api" label="API" icon={<Dot className="bg-cyan-500" />} />
    </div>
  );
};