import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import scene from '../assets/3d/Player.glb';

export function Player({ animation, isContact, ...props }) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {

        // Fix the root bone position
        animations.forEach((clip) => {
            clip.tracks = clip.tracks.filter((track) => {
                // Remove position tracks for the root bone
                return !track.name.includes('Hips.position');
            });
        });

        actions[animation]?.reset().fadeIn(0.24).play();
        return () => actions[animation]?.fadeOut(0.24);
    }, [animation, actions, animations]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature_Simple_Humanoid" rotation={[Math.PI / 2, 0, 0]}>
                    <skinnedMesh
                        name="body"
                        geometry={nodes.body.geometry}
                        material={materials['simple humanoid']}
                        skeleton={nodes.body.skeleton}
                    />
                    <skinnedMesh
                        name="eyebrows"
                        geometry={nodes.eyebrows.geometry}
                        material={materials['simple humanoid']}
                        skeleton={nodes.eyebrows.skeleton}
                        morphTargetDictionary={nodes.eyebrows.morphTargetDictionary}
                        morphTargetInfluences={nodes.eyebrows.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="eyes"
                        geometry={nodes.eyes.geometry}
                        material={materials['simple humanoid']}
                        skeleton={nodes.eyes.skeleton}
                        morphTargetDictionary={nodes.eyes.morphTargetDictionary}
                        morphTargetInfluences={nodes.eyes.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="hair_01"
                        geometry={nodes.hair_01.geometry}
                        material={materials['simple humanoid']}
                        skeleton={nodes.hair_01.skeleton}
                    />
                    <skinnedMesh
                        name="pants_01"
                        geometry={nodes.pants_01.geometry}
                        material={materials['simple humanoid']}
                        skeleton={nodes.pants_01.skeleton}
                    />
                    <skinnedMesh
                        name="shirt_01"
                        geometry={nodes.shirt_01.geometry}
                        material={materials['simple humanoid']}
                        skeleton={nodes.shirt_01.skeleton}
                    />
                    <group name="shoes_01">
                        <skinnedMesh
                            name="shoes_01_1"
                            geometry={nodes.shoes_01_1.geometry}
                            material={materials['simple humanoid']}
                            skeleton={nodes.shoes_01_1.skeleton}
                        />
                        <skinnedMesh
                            name="shoes_01_2"
                            geometry={nodes.shoes_01_2.geometry}
                            material={materials['simple humanoid secondary']}
                            skeleton={nodes.shoes_01_2.skeleton}
                        />
                    </group>
                    <primitive object={nodes.Hips} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload(scene);