import { useGLTF } from "@react-three/drei";
import { DoubleSide } from "three";

import houseGlb from './assets/house.glb';

const House = ({children}) => {
    const { nodes } = useGLTF(houseGlb, true);

    return (
        <>
            <group>
                <mesh geometry={nodes.House.geometry}>
                    <meshBasicMaterial color={0xffffff} side={DoubleSide} opacity={0.5} transparent={true}/>
                </mesh>
            </group>
            <group>
                {children}
            </group>
        </>
    );
};

export default House;
