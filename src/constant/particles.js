export const landingPageParticles = {
    background: {
        color: {
            value: '#00000',
        },
    },
    fullScreen: {
        enable: true,
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 200,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 6,
            },
        },
    },
    particles: {
        color: {
            value: '#0B87A0',
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: true,
            speed: 1,
            straight: false,
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
            },
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 60,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};
