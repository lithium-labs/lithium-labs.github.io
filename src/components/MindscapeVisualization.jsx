import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force-3d';

function Node({ position, size, type, isActive }) {
  const meshRef = useRef();
  const color = type === 'function' ? '#4a9eff' : '#ff6b6b';
  
  useEffect(() => {
    if (isActive) {
      meshRef.current.scale.setScalar(1.2);
    } else {
      meshRef.current.scale.setScalar(1);
    }
  }, [isActive]);

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size * 0.5, 32, 32]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
}

function Edge({ start, end }) {
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...end])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#ffffff" opacity={0.3} transparent />
    </line>
  );
}

export function MindscapeVisualization({ graphData }) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [activeNode, setActiveNode] = useState(null);

  const handleNodeClick = (nodeId) => {
    setActiveNode(nodeId);
  };

  useEffect(() => {
    if (!graphData) return;

    const simulation = forceSimulation(graphData.nodes)
      .force('charge', forceManyBody().strength(-50))
      .force('center', forceCenter())
      .force('link', forceLink(graphData.edges)
        .id(d => d.id)
        .distance(30)
      );

    simulation.on('tick', () => {
      setNodes([...simulation.nodes()]);
      setEdges([...graphData.edges]);
    });

    return () => simulation.stop();
  }, [graphData]);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={[node.x, node.y, node.z]}
            size={node.size || 1}
            type={node.type}
            isActive={node.id === activeNode}
          />
        ))}
        
        {edges.map((edge, i) => (
          <Edge
            key={i}
            start={[edge.source.x, edge.source.y, edge.source.z]}
            end={[edge.target.x, edge.target.y, edge.target.z]}
          />
        ))}
        
        <OrbitControls />
      </Canvas>
    </div>
  );
} 