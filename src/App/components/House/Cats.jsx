import { useState } from 'react';
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { DoubleSide } from "three";

import MatCap from "../../lib/MatCap";
import catGlb from './assets/house.glb';
/**
 * Cat V1 3D Model source: https://free3d.com/3d-model/cat-v1--326682.html
 * Created by printable_models: https://free3d.com/user/printable_models
 * LICENSE: Personal Use License
 */

const Cat = () => {
    const { nodes } = useGLTF(catGlb, true);
    const [matcap] = useMatcapTexture(MatCap.id.BLACK, MatCap.size.XS);
    const [clickableMatCap] = useMatcapTexture(MatCap.id.GREEN, MatCap.size.XL);
    const [toggle, setToggle] = useState(true);
    const scale = toggle ? .01 : 0.1;

    return (
        <group>
            <mesh geometry={nodes.Cat.geometry} scale={0.01} position={[-4,0, 3]}>
                <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
            </mesh>
            <mesh geometry={nodes.Cat.geometry} scale={0.01} position={[-3, 0, 3]} rotation={[0, 45, 0]}>
                <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
            </mesh>
            <mesh onClick={() =>  setToggle(!toggle)} geometry={nodes.Cat.geometry} scale={scale} position={[-4, 0, 2]} rotation={[0, -45, 0]}>
                <meshMatcapMaterial matcap={clickableMatCap} side={DoubleSide}/>
            </mesh>
        </group>
    );
};

export default Cat;
