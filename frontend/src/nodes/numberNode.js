import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value ?? 0);

  return (
    <BaseNode id={id} title="Number" inputs={[]} outputs={["value"]} width={240} height={120}>
      <label style={{ fontSize: 12 }}>
        Value:
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
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
    </BaseNode>
  );
};