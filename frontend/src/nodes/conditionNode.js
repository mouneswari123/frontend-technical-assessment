import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id, data }) => {
  const [mode, setMode] = useState(data?.mode || "equals");

  return (
    <BaseNode id={id} title="Condition" inputs={["left", "right"]} outputs={["true", "false"]} width={260} height={140}>
      <label style={{ fontSize: 12 }}>
        Compare:
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          style={{
            width: "100%",
            marginTop: 4,
            padding: 6,
            borderRadius: 8,
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        >
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="greater">Greater Than</option>
        </select>
      </label>
      <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
        Routes output to true/false.
      </div>
    </BaseNode>
  );
};