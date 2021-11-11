import { useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

import batGlb from './assets/house.glb';
import { AnimationMixer } from 'three';

const Bat = () => {
    const { animations, scene } = useGLTF(batGlb, true);
    const animationRef = useRef();
    const mixer = useMemo(() => new AnimationMixer(), []);

    useEffect(() => {
        if (animationRef.current) {
            mixer.clipAction(animations[0], animationRef.current).play();
        }
    }, [animations, mixer]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <primitive object={scene} ref={animationRef} />)
    ;
};

export default Bat;
