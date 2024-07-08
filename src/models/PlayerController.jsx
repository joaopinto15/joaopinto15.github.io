import React, { useRef } from 'react'
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CapsuleCollider } from '@react-three/rapier';
import { Mario } from '../models';
import { useControls } from 'leva';
import { degToRad } from 'three/src/math/MathUtils.js';
import { playerAnimations } from '../constants';

import { useEffect, useState } from 'react';
import { Vector3, MathUtils } from 'three';

const normalizeAngle = (angle) => {
    while (angle > Math.PI) angle -= Math.PI * 2;
    while (angle < -Math.PI) angle += Math.PI * 2;
    return angle;
}

const lerpAngle = (start, end, t) => {
    start = normalizeAngle(start);
    end = normalizeAngle(end);
    if (Math.abs(start - end) > Math.PI) {
        if (end > start) start += Math.PI * 2;
        else end += Math.PI * 2;
    }
    return normalizeAngle(start + (end - start) * t);
}


export const PlayerController = () => {

    const { WALK_SPEED, RUN_SPEED, ROTATION_SPEED } = useControls(
        "Player Control",
        {
            WALK_SPEED: { value: 0.7, min: 0.5, max: 2 },
            RUN_SPEED: { value: 0.7, min: 0.5, max: 2 },
            ROTATION_SPEED: {
                value: degToRad(0.5),
                min: degToRad(0.1),
                max: degToRad(5),
                step: degToRad(0.1),
            },

        }
    );
    const { emotes } = useControls("Emotes", {
        emotes: {
            value: Object.keys(playerAnimations)[7],
            options: Object.keys(playerAnimations),
        },
    });
    const rb = useRef();
    const container = useRef();
    const player = useRef();

    const [animation, setAnimation] = useState(playerAnimations.idle);

    const playerRotationTarget = useRef(0);
    const rotationTarget = useRef(0);
    const cameraTarget = useRef();
    const cameraPosition = useRef();
    const cameraWorldPosition = useRef(new Vector3());
    const cameraLookAtWorldPosition = useRef(new Vector3());
    const cameraLookAt = useRef(new Vector3());
    const [, get] = useKeyboardControls();
    const isClicking = useRef(false);

    useEffect(() => {
        const onMouseDown = (e) => {
            isClicking.current = true;
        };
        const onMouseUp = (e) => {
            isClicking.current = false;
        };
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        // touch
        document.addEventListener("touchstart", onMouseDown);
        document.addEventListener("touchend", onMouseUp);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("touchstart", onMouseDown);
            document.removeEventListener("touchend", onMouseUp);
        };
    }, []);





    useFrame(({ camera, mouse }) => {
        if (rb.current) {
            const vel = rb.current.linvel();

            const movement = {
                x: 0,
                z: 0,
            };

            if (get().forward) {
                movement.z = 1;
            }
            if (get().back) {
                movement.z = -1;
            }


            let speed = get().run ? RUN_SPEED : WALK_SPEED;

            if (isClicking.current) {
                //console.log("clicking", mouse.x, mouse.y);
                if (Math.abs(mouse.x) > 0.1) {
                    movement.x = -mouse.x;
                }
                movement.z = mouse.y + 0.4;
                if (Math.abs(movement.x) > 0.5 || Math.abs(movement.z) > 0.5) {
                    speed = RUN_SPEED;
                }
            }

            if (get().left) {
                movement.x = 1;
            }
            if (get().right) {
                movement.x = -1;
            }

            if (movement.x !== 0) {
                rotationTarget.current += ROTATION_SPEED * movement.x;
            }

            if (movement.x !== 0 || movement.z !== 0) {
                playerRotationTarget.current = Math.atan2(movement.x, movement.z);
                vel.x =
                    Math.sin(rotationTarget.current + playerRotationTarget.current) *
                    speed;
                vel.z =
                    Math.cos(rotationTarget.current + playerRotationTarget.current) *
                    speed;
                if (speed === RUN_SPEED) {
                    setAnimation(playerAnimations.run);
                } else {
                    setAnimation(playerAnimations.walk);
                }
            } else {
                setAnimation(playerAnimations[emotes]);

            }
            player.current.rotation.y = lerpAngle(
                player.current.rotation.y,
                playerRotationTarget.current,
                0.1
            );

            rb.current.setLinvel(vel, true);
        }

        // CAMERA
        container.current.rotation.y = MathUtils.lerp(
            container.current.rotation.y,
            rotationTarget.current,
            0.1
        );

        cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
        camera.position.lerp(cameraWorldPosition.current, 0.1);

        if (cameraTarget.current) {
            cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
            cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

            camera.lookAt(cameraLookAt.current);
        }
    });


    return (
        <RigidBody colliders={false} lockRotations ref={rb}>
            <group ref={container}>
                <group ref={cameraTarget} position-z={1.5} />
                <group ref={cameraPosition} position-y={4} position-z={-4} />
                <group ref={player}>
                    <Mario scale={0.01} position-y={-0.25} animation={animation} />
                </group>
            </group>
            <CapsuleCollider args={[0.08, 0.15]} />
        </RigidBody>
    )
}
