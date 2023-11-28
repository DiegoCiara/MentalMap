import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import 'reactflow/dist/style.css';

type position = {
  x: number;
  y: number;
}

interface Node {
  id: string;
  data: Record<"label", string>,
  position: position,
}

const initNodes: Node[] = [
  {
    id: 'a',
    data: { label: 'Node A' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'b',
    data: { label: 'Node B' },
    position: { x: 100, y: 100 },
  },
  {
    id: 'c',
    data: { label: 'Node C' },
    position: { x: 150, y: 180 },
  },
];

const initEdges = [
  {
    id: 'a-b',
    source: 'a',
    target: 'b',
  },
  {
    id: 'c-b',
    source: 'c',
    target: 'b',
  },
];

function App() {
  const [nodes, setNodes , onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges , onEdgesChange] = useEdgesState(initEdges);
 // Função para adicionar um novo nó
 const addNode = () => {
  const newNode = {
    id: `new-node-${nodes.length + 1}`, 
    data: { label: `New Node ${nodes.length + 1}` },
    position: { x: 0, y: 0 }, // Defina a posição desejada
  };

  // Atualiza o estado dos nós
  setNodes((prevNodes: Node[]) => [...prevNodes, newNode]);
};
  return (
    <>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <button onClick={addNode}>Adicionar Novo Nó</button>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </>
  );
}

export default App;
