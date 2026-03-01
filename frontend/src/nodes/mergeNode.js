import { BaseNode } from "./BaseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      inputs={["a", "b"]}
      outputs={["out"]}
      width={240}
      height={110}
    >
      <div style={{ fontSize: 13, color: "#444" }}>
        Combines two inputs into one output.
      </div>
    </BaseNode>
  );
};