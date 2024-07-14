import { OrbitControls, Environment, OrthographicCamera } from "@react-three/drei";
import { useRef } from "react";
import { Physics } from '@react-three/rapier';
import { useControls } from "leva";
import { Map, PlayerController } from "../models";
import { maps } from "../constants";


const Game = () => {

    const shadowCameraRef = useRef();
    const { map } = useControls("Map", {
        map: {
            value: "a_quiet_place",
            options: Object.keys(maps),
        },
    })


    return (
        <>
            <OrbitControls />
            <Environment preset="sunset" />
            <directionalLight
                intensity={0.65}
                castShadow
                position={[-15, 10, 15]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.00005}
            >
                <OrthographicCamera
                    left={-22}
                    right={15}
                    top={10}
                    bottom={-20}
                    ref={shadowCameraRef}
                    attach={"shadow-camera"}
                />
            </directionalLight>
            <Physics debug key={map}>
                <Map />
                <PlayerController />
            </Physics>
        </>
    );
};

export default Game;