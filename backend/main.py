# from fastapi import FastAPI, Form

# app = FastAPI()

# @app.get('/')
# def read_root():
#     return {'Ping': 'Pong'}

# @app.get('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):
#     return {'status': 'parsed'}
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Any, Dict, List, Set
from collections import defaultdict, deque
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Request Schema ----------
class PipelinePayload(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

# ---------- Helpers ----------
def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    # Collect node ids
    node_ids: Set[str] = set()
    for n in nodes:
        nid = n.get("id")
        if nid is not None:
            node_ids.add(str(nid))

    # Build adjacency + indegree
    adj = defaultdict(list)
    indeg = {nid: 0 for nid in node_ids}

    for e in edges:
        src = e.get("source")
        tgt = e.get("target")
        if src is None or tgt is None:
            continue
        src = str(src)
        tgt = str(tgt)

        # If edge references nodes not in node list, still handle safely
        if src not in indeg:
            indeg[src] = 0
            node_ids.add(src)
        if tgt not in indeg:
            indeg[tgt] = 0
            node_ids.add(tgt)

        adj[src].append(tgt)
        indeg[tgt] += 1

    # Kahn's algorithm (topological sort)
    q = deque([nid for nid, d in indeg.items() if d == 0])
    visited = 0

    while q:
        u = q.popleft()
        visited += 1
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)

    return visited == len(indeg)

# ---------- Routes ----------
@app.get("/")
def read_root():
    return {"status": "ok"}

@app.post("/pipelines/parse")
def parse_pipeline(payload: PipelinePayload):
    num_nodes = len(payload.nodes)
    num_edges = len(payload.edges)
    dag = is_dag(payload.nodes, payload.edges)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}