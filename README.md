# VectorShift Frontend Technical Assessment — Pipeline Builder

This project is a mini **workflow / pipeline builder** (similar to VectorShift).
Users can **drag and drop nodes**, **connect them**, and **submit** the pipeline to a backend to validate it.

---

## What I Built (High Level)

###  Frontend (React + ReactFlow + Zustand + Tailwind)
- A canvas where the user can **build a pipeline visually**
- A **Node Library** (sidebar) to drag and drop nodes
- **Connections (edges)** between nodes using connectors (handles)
- **Modern UI** (gradient background + glass panels + colored node cards)

###  Text Node Special Logic
- The Text Node supports template variables like:
  - `Hello {{name}}`
- When the user types `{{name}}`, the app **detects the variable** and automatically creates a **new input connector** on the **left side** of the Text Node.
- The Text Node textarea also **auto-resizes** to fit more content.

###  Backend (FastAPI)
- Endpoint: `POST /pipelines/parse`
- It receives:
  - `nodes`: list of node ids
  - `edges`: list of source → target connections
- It returns:
  ```json
  { "num_nodes": 2, "num_edges": 1, "is_dag": true }
