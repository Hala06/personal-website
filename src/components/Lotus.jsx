import React, { Component, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('BlueL.glb', true);
  
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = true;
        child.material.transparent = true;
        child.material.opacity = 0.9;
        child.material.color.set('#40e0ff');
        child.material.emissive.set('#004444');
        child.material.emissiveIntensity = 1.2;
      }
    });
  }, [scene]);
  
  return <primitive object={scene} scale={[1.8, 1.8, 1.8]} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} />;
}

const Attribution = () => (
  <div style={{
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: '#ffffff80',
    fontSize: '12px',
    textShadow: '0 0 10px rgba(64, 224, 255, 0.5)'
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
    <div style={{ 
      width: '100%', 
      height: '90vh', 
      position: 'relative',
      margin: '5vh auto',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '60%',
        height: '100%',
        position: 'relative'
      }}>
        <ErrorBoundary>
          <Canvas camera={{ position: [3, 2, 3], fov: 75 }} dpr={[1, 2]}>
            <color attach="background" args={['#000000']} />
            <ambientLight intensity={0.7} />
            <spotLight 
              position={[5, 5, 5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={2.5} 
              castShadow
              color="#40e0ff"
            />
            <spotLight 
              position={[-5, -5, -5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={1.5} 
              castShadow
              color="#ff40ff"
            />
            <Suspense fallback={<mesh><boxGeometry /></mesh>}>
              <Model />
              <Environment preset="night" />
              <Stars 
                radius={300} 
                depth={100} 
                count={10000} 
                factor={6} 
                saturation={0.5}
                speed={1.5}
                fade={true}
              />
            </Suspense>
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              minDistance={2.5}
              maxDistance={12}
              autoRotate
              autoRotateSpeed={0.5}
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Canvas>
        </ErrorBoundary>
        <Attribution />
      </div>
    </div>
  );
};

export default Lotus;
