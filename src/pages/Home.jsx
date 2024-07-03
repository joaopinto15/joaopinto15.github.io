import { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three'; // Import RepeatWrapping from 'three'
import { OrbitControls } from '@react-three/drei';
import { Player } from '../models/index.js';
import Floor from '../textures/Floor.jsx';
import floorTexture from '../assets/images/starbucks.png';

const Home = () => (
  <div className="h-screen w-screen">
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Player position={[0, 0, 0]} />
      <Floor />
      <OrbitControls />
    </Canvas>
  </div>
);

export default Home;