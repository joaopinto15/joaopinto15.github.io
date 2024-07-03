import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import playerModel from '../assets/3d/leminha_pet.glb';

export function Player({ position: initialPosition, ...props }) {
  const group = useRef();
  const [position, setPosition] = useState(initialPosition);
  const [rotation, setRotation] = useState(0); // Player rotation state
  const { nodes, materials, animations } = useGLTF(playerModel);
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree(); // Access the camera

  const handleKeyDown = useCallback((event) => {
    setPosition((prevPosition) => {
      const delta = 1;
      let newRotation = rotation; // Copy current rotation
      switch (event.key) {
        case 's':
        case 'ArrowDown':
          return [prevPosition[0], prevPosition[1], prevPosition[2] - delta];
        case 'w':
        case 'ArrowUp':
          return [prevPosition[0], prevPosition[1], prevPosition[2] + delta];
        case 'd':
        case 'ArrowRight':
          newRotation -= Math.PI / 8; // Turn right
          break;
        case 'a':
        case 'ArrowLeft':
          newRotation += Math.PI / 8; // Turn left
          break;
      }
      setRotation(newRotation); // Update rotation state
      return prevPosition; // Return position unchanged for rotation keys
    });
  }, [rotation]);

  const handleKeyUp = useCallback((event) => {
    actions.run.stop(); // Stop the 'run' animation when the key is released
  }, [actions]);

  useEffect(() => {
    actions['Armature|ArmatureAction'].play();
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useFrame(() => {
    group.current.position.set(...position);
    // Update the camera position to be behind the player
    // Adjust the values as needed to position the camera correctly relative to the player
    const distance = 5; // Distance behind the player for the camera
    // Calculate the new camera position
    const x = position[0] + distance * Math.sin(rotation);
    const z = position[2] + distance * Math.cos(rotation);
    camera.position.set(x, position[1] + 2, z); // Adjust height as needed
    camera.lookAt(...position);
  });


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="42ed0e99088d49e296e95c0ed2a5895efbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Home"
                  position={[1.753, -29.037, 1.753]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Caracol"
                  position={[1.753, -29.037, 1.753]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Antenas"
                  position={[1.753, -29.037, 1.753]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature"
                  position={[1.753, 9.224, -7.01]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_8">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_46"
                      geometry={nodes.Object_46.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_46.skeleton}
                    />
                    <group
                      name="Object_10"
                      position={[1.753, -29.037, 1.753]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_12"
                      position={[1.753, -29.037, 1.753]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_14"
                      position={[1.753, -29.037, 1.753]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group name="Object_45" position={[1.753, 124.019, 108.806]} scale={100} />
                  </group>
                </group>
                <group name="Eye_Global" position={[1.753, 124.02, 108.806]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
