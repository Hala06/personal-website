import React, { Component, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('BlueL.glb', true);
  
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Create a modern wireframe effect
        child.material.wireframe = true;
        child.material.transparent = true;
        child.material.opacity = 0.8;
        child.material.color.set('#00ffff'); // Cyan color for modern look
        child.material.emissive.set('#003333'); // Subtle glow
        child.material.emissiveIntensity = 0.5;
      }
    });
  }, [scene]);
  
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} />;
}

const Attribution = () => (
  <div style={{
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: '#ffffff80',
    fontSize: '12px'
  }}>
    <a href="https://www.meshy.ai/workspace" 
       target="_blank" 
       rel="noopener noreferrer"
       style={{ color: 'inherit', textDecoration: 'underline' }}>
      Model by Meshy.ai (CC BY 4.0)
    </a>
  </div>
);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Error loading 3D model.</div>;
    }
    return this.props.children;
  }
}

const Lotus = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <ErrorBoundary>
        <Canvas camera={{ position: [3, 2, 3], fov: 60 }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[5, 5, 5]} 
            angle={0.3} 
            penumbra={1} 
            intensity={2} 
            castShadow
            color="#00ffff"
          />
          <spotLight 
            position={[-5, -5, -5]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1} 
            castShadow
            color="#ff00ff"
          />
          <Suspense fallback={<mesh><boxGeometry /></mesh>}>
            <Model />
            <Environment preset="sunset" />
            <Stars 
              radius={100} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0}
            />
          </Suspense>
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            minDistance={2}
            maxDistance={15}
            autoRotate
            autoRotateSpeed={0.2}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </ErrorBoundary>
      <Attribution />
    </div>
  );
};

export default Lotus;
