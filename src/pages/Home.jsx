import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import { Physics } from '@react-three/rapier';
import { Game } from '../components';
import { KeyboardControls } from '@react-three/drei';

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
};


const Home = () => {

  const map = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ], []);

  return (
    <div className="h-screen w-screen">
      <KeyboardControls map={map}>

        <Canvas camera={{ position: [0, 2, 5] }}>
          <Suspense>
            <Physics debug>
              <Game />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default Home;