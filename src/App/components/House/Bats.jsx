import { useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useFrame } from '@react-three/fiber';

import MatCap from "../../lib/MatCap";
import batGlb from './assets/house.glb';
import { AnimationMixer } from 'three';

const Bat = () => {
    const { animations, scene } = useGLTF(batGlb, true);
    const animationRef = useRef();
    const mixer = useMemo(() => new AnimationMixer(), []);
    const [matcap] = useMatcapTexture(MatCap.id.BLACK, MatCap.size.XS);
    const [toggle, setToggle] = useState(true);
    const scale = toggle ? 1 : 2;

    useEffect(() => {
        if (animationRef.current) {
            mixer.clipAction(animations[0], animationRef.current).play();
        }
    }, [animations, mixer]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });
    {/* <group>
    <mesh geometry={nodes.Bat.geometry} scale={1} position={[-4,-1, 3]}>
        <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
    </mesh>
    <mesh geometry={nodes.Bat.geometry} scale={1} position={[-3, 3, 7]} rotation={[0, 45, 0]}>
        <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
    </mesh>
    <mesh onClick={() =>  setToggle(!toggle)} geometry={nodes.Bat.geometry} scale={scale} position={[-4,-1, 2]} rotation={[0, -45, 0]}>
        <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
    </mesh>
</group> */}

    return (
        <primitive object={scene} ref={animationRef} />)
    ;
};

export default Bat;
