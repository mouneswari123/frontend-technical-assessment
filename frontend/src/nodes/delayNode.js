import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms ?? 500);

  return (
    <BaseNode id={id} title="Delay" inputs={["in"]} outputs={["out"]} width={240} height={130}>
      <label style={{ fontSize: 12 }}>
        Delay (ms):
        <input
          type="number"
          value={ms}
          onChange={(e) => setMs(Number(e.target.value))}
          style={{
            width: "100%",
            marginTop: 4,
            padding: 6,
            borderRadius: 8,
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />
      </label>
      <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
        Passes input after a delay.
      </div>
    </BaseNode>
  );
};