import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { DoubleSide } from "three";

import MatCap from "../../lib/MatCap";
import catGlb from './assets/house.glb';

const Cat = () => {
    const { nodes } = useGLTF(catGlb, true);
    const [matcap] = useMatcapTexture(MatCap.id.BLACK, MatCap.size.XL);

    return (
        <group>
            <mesh geometry={nodes.Cat.geometry}>
                <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
            </mesh>
        </group>
    );
};

export default Cat;
