import React from 'react';

export function Player() {

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
