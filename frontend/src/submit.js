export async function submitPipeline(nodes, edges) {
  try {
    const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes, edges }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Backend error");
    }

    const data = await res.json();

    alert(
      `Pipeline Analysis ✅\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${
        data.is_dag ? "Yes (No Cycles)" : "No (Cycle Detected)"
      }`
    );

    return data;
  } catch (err) {
    console.error(err);
    alert(`Submit failed \n${err.message}`);
    throw err;
  }
}