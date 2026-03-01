// import { useState, useRef, useCallback } from "react";
// import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
// import { useStore } from "./store";
// import { shallow } from "zustand/shallow";

// import { InputNode } from "./nodes/inputNode";
// import { LLMNode } from "./nodes/llmNode";
// import { OutputNode } from "./nodes/outputNode";
// import { TextNode } from "./nodes/textNode";

// import { NumberNode } from "./nodes/numberNode";
// import { MergeNode } from "./nodes/mergeNode";
// import { DelayNode } from "./nodes/delayNode";
// import { ConditionNode } from "./nodes/conditionNode";
// import { ApiNode } from "./nodes/apiNode";

// import { submitPipeline } from "./submit";
// import "reactflow/dist/style.css";

// const gridSize = 24;
// const proOptions = { hideAttribution: true };

// const nodeTypes = {
//   customInput: InputNode,
//   llm: LLMNode,
//   customOutput: OutputNode,
//   text: TextNode,
//   number: NumberNode,
//   merge: MergeNode,
//   delay: DelayNode,
//   condition: ConditionNode,
//   api: ApiNode,
// };

// const selector = (state) => ({
//   nodes: state.nodes,
//   edges: state.edges,
//   getNodeID: state.getNodeID,
//   addNode: state.addNode,
//   onNodesChange: state.onNodesChange,
//   onEdgesChange: state.onEdgesChange,
//   onConnect: state.onConnect,
// });

// export const PipelineUI = () => {
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);

//   const { nodes, edges, getNodeID, addNode, onNodesChange, onEdgesChange, onConnect } =
//     useStore(selector, shallow);

//   const getInitNodeData = (nodeID, type) => ({ id: nodeID, nodeType: `${type}` });

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//       const bounds = reactFlowWrapper.current.getBoundingClientRect();

//       const raw = event.dataTransfer.getData("application/reactflow");
//       if (!raw) return;

//       const appData = JSON.parse(raw);
//       const type = appData?.nodeType;
//       if (!type || !reactFlowInstance) return;

//       // IMPORTANT: CRA + older reactflow supports "project" (not screenToFlowPosition)
//       const position = reactFlowInstance.project({
//         x: event.clientX - bounds.left,
//         y: event.clientY - bounds.top,
//       });

//       const nodeID = getNodeID(type);
//       addNode({
//         id: nodeID,
//         type,
//         position,
//         data: getInitNodeData(nodeID, type),
//       });
//     },
//     [reactFlowInstance, getNodeID, addNode]
//   );

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//   }, []);

//   const handleSubmit = async () => {
//     await submitPipeline(nodes, edges);
//   };

//   return (
//     <div className="relative w-full h-[78vh]">
//       <div ref={reactFlowWrapper} className="w-full h-full rounded-2xl overflow-hidden border border-slate-200 bg-white">
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           onDrop={onDrop}
//           onDragOver={onDragOver}
//           onInit={setReactFlowInstance}
//           nodeTypes={nodeTypes}
//           proOptions={proOptions}
//           snapGrid={[gridSize, gridSize]}
//           connectionLineType="smoothstep"
//           fitView
//         >
//           <Background color="#d1d5db" gap={gridSize} />
//           <Controls />
//           <MiniMap />
//         </ReactFlow>
//       </div>

//       {/* Submit button centered bottom like screenshot */}
//       <div className="absolute left-1/2 -translate-x-1/2 bottom-4">
//         <button onClick={handleSubmit} className="btn-primary">
//           Submit Pipeline
//         </button>
//       </div>
//     </div>
//   );
// };
// --------------------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";

import { submitPipeline } from "./submit";

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const { nodes, edges, getNodeID, addNode, onNodesChange, onEdgesChange, onConnect } =
    useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: `${type}` };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      const data = event?.dataTransfer?.getData("application/reactflow");
      if (!data) return;

      const appData = JSON.parse(data);
      const type = appData?.nodeType;
      if (!type || !reactFlowInstance) return;

      // ✅ reactflow older versions lo project() use cheyyali
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);
      const newNode = {
        id: nodeID,
        type,
        position,
        data: getInitNodeData(nodeID, type),
      };

      addNode(newNode);
    },
    [reactFlowInstance, addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const handleSubmit = async () => {
    await submitPipeline(nodes, edges);
  };

  return (
    <div className="w-full h-full">
      {/* ✅ Step 5: Glass + Shade canvas */}
      <div
        ref={reactFlowWrapper}
        style={{ width: "100%", height: "70vh" }}
        className="rounded-3xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur-md shadow-lg"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
        >
          <Background color="#cbd5e1" gap={gridSize} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "12px",
          padding: "10px 18px",
          borderRadius: "10px",
          border: "1px solid #cbd5e1",
          background: "white",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};