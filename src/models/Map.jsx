import React from 'react'
import { Box } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';


export function Map() {


    return (
        <RigidBody type='fixed' name='floor' position={[0, -1, 0]} >
            <Box position={[0, -1, 0]} args={[10, 1, 10]}>
                <meshStandardMaterial color='springgreen' />
            </Box>
        </RigidBody>
    )
}
