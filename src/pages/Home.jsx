import { Canvas } from '@react-three/fiber';
import { useMemo, Suspense } from 'react';
import { Game, Loader, WelcomeCard, Overlay } from '../components';
import { KeyboardControls } from '@react-three/drei';
import { Leva } from 'leva';

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
  run: 'run',
  dance: 'dance',
};

const Home = () => {

  const map = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.run, keys: ["ShiftLeft"] },
    { name: Controls.jump, keys: ["Space"] },
    { name: Controls.dance, keys: ["KeyH"] },
  ], []);

  return (
    <div className="h-screen w-screen">
      <Leva hidden />
      <Canvas
        camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={<Loader />}>
          <KeyboardControls map={map}>
            <Game />
          </KeyboardControls>
        </Suspense>
      </Canvas>
      <Overlay />
    </div>

  );
}

export default Home;