import { useState } from 'react';
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { DoubleSide, MathUtils } from "three";

import MatCap from "../../lib/MatCap";
import catGlb from './assets/house.glb';

const Cat = () => {
    const { nodes } = useGLTF(catGlb, true);
    const [matcap] = useMatcapTexture(MatCap.id.BLACK, MatCap.size.XS);
    const [toggle, setToggle] = useState(true);
    const scale = toggle ? .01 : 0.1;

    return (
        <group>
            <mesh geometry={nodes.Cat.geometry} scale={0.01} position={[-4,-1, 3]}>
                <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
            </mesh>
            <mesh geometry={nodes.Cat.geometry} scale={0.01} position={[-3,-1, 3]} rotation={[0, 45, 0]}>
                <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
            </mesh>
            <mesh onClick={() =>  setToggle(!toggle)} geometry={nodes.Cat.geometry} scale={scale} position={[-4,-1, 2]} rotation={[0, -45, 0]}>
                <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
            </mesh>
        </group>
    );
};

export default Cat;
