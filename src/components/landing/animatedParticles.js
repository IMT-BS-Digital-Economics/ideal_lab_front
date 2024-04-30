import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

import { landingPageParticles } from '../../constant/particles';

const AnimatedParticles = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = () => {};

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={landingPageParticles}
        />
    );
};

export default AnimatedParticles;
