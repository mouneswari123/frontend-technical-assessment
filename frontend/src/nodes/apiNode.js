import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "https://api.example.com");

  return (
    <BaseNode id={id} title="API Request" inputs={["payload"]} outputs={["response"]} width={280} height={150}>
      <label style={{ fontSize: 12 }}>
        URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
        Sends payload and returns response.
      </div>
    </BaseNode>
  );
};