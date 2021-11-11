import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { DoubleSide } from "three";

import MatCap from "../../lib/MatCap";
import houseGlb from "./assets/house.glb";

const HouseMatcapTexture = ({children}) => {
  const { nodes } = useGLTF(houseGlb, true);
  const [matcap] = useMatcapTexture(MatCap.id.GREEN, MatCap.size.XS);

  return (
      <>
    <group>
      <mesh geometry={nodes.House.geometry}>
        <meshMatcapMaterial matcap={matcap} side={DoubleSide}/>
      </mesh>
    </group>
    <group>{children}</group>
    </>
  );
};

export default HouseMatcapTexture;