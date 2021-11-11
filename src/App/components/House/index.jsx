import { useGLTF } from "@react-three/drei";

import houseGlb from './assets/house.glb';

const House = () => {
    const { nodes, materials } = useGLTF(houseGlb, true);

    return (
        <group>
            <mesh geometry={nodes.House.geometry} materials={materials['Shell']}/>
        </group>
    );
};

export default House;
