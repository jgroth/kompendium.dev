import { Config } from '@stencil/core';
import { kompendium } from 'kompendium';

export const config: Config = {
    namespace: 'kompendium-dev',
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-custom',
            strict: true,
            generator: kompendium()
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
            copy: [{
                src: '../node_modules/kompendium/dist/',
                dest: 'assets/kompendium/'
            }]
        },
    ],
};
