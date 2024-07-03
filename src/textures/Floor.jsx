import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import { starbucks } from '../assets/images/index';

export function Floor({ position: initialPosition, ...props }) {
    const texture = useLoader(TextureLoader, starbucks);
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(10, 10);

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
            <planeGeometry args={[100, 100, 10, 10]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}

export default Floor;