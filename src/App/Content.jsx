/**
 * Import dependencies
 */

import { Suspense } from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import { useControls } from 'leva';

/**
 * Import local components
 */
import Cat from './components/House/Cats';
import Bat from './components/House/Bats';

// Lighting
import Lighting from './components/Lighting';
import LightingGui from './components/Lighting/indexGui';
import LightingStudio from './components/Lighting/Studio';
import LightingStudioGui from './components/Lighting/StudioGui';
import LightingThreePoint from './components/Lighting/ThreePoint';
import LightingThreePointGui from './components/Lighting/ThreePointGui';

const components = [
    'House',
];

const lightings = ['None', 'Default', 'Studio', 'ThreePoint'];

const Content = () => {
    const { showStats } = useControls('General', {
        showStats: {
            label: 'Stats',
            value: false,
        },
    });

    const {
        showAxesHelper,
        showGridHelper,
        useComponent,
        useLighting,
        useLightingGui,
    } = useControls('Helpers', {
        showAxesHelper: {
            label: 'Axes Helper',
            value: false,
        },
        showGridHelper: {
            label: 'Grid Helper',
            value: false,
        },
        useComponent: {
            label: 'Component',
            options: components,
            value: 'House',
        },
        useLighting: {
            label: 'Lighting',
            options: lightings,
            value: 'Studio',
        },
        useLightingGui: {
            label: 'Lighting GUI',
            value: false,
        },
    });

    function showComponent(name) {
        return useComponent === name;
    };

    function showLighting(name) {
        return useLighting === name;
    };

    return (
        <>
            <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
            {showAxesHelper && <axesHelper />}
            {showGridHelper && <gridHelper />}
            {showStats && <Stats />}

            {showLighting('Default') && !useLightingGui && <Lighting/>}
            {showLighting('Default') && useLightingGui && <LightingGui />}
            {showLighting("Studio") && !useLightingGui && <LightingStudio />}
            {showLighting("Studio") && useLightingGui && <LightingStudioGui />}
            {showLighting("ThreePoint") && !useLightingGui && <LightingThreePoint />}
            {showLighting("ThreePoint") && useLightingGui && (
                <LightingThreePointGui />
            )}

            <Suspense fallback={null}>
                {showComponent('House') && <><Cat /><Bat /></>}
            </Suspense>
        </>
    )
}

export default Content
