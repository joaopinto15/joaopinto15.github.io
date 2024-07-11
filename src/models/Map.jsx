import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import scene from "../assets/3d/a_quiet_place.glb";

export function Map(props) {
    const { nodes, materials } = useGLTF(scene);
    return (
        <RigidBody type="fixed" colliders="trimesh">
            <group {...props} rotation={[0, 1.80, 0]} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_2.geometry}
                        material={materials.color_palette}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.color_palette}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials.color_palette}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_5.geometry}
                        material={materials.color_palette}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_6.geometry}
                        material={materials['color_palette.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_7.geometry}
                        material={materials['color_palette.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_8.geometry}
                        material={materials['color_palette.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_9.geometry}
                        material={materials['color_palette.003']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_10.geometry}
                        material={materials.outline}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_11.geometry}
                        material={materials.outline}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials.outline}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_13.geometry}
                        material={materials['outline.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_14.geometry}
                        material={materials['outline.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_15.geometry}
                        material={materials['outline.003']}
                    />
                </group>
            </group>
        </RigidBody>
    )
}

useGLTF.preload(scene)
