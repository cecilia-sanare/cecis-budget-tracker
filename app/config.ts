type Environments = {
    [key: string]: 'local'|'live';
};

type CBTEnvironmentConfigs = {
    [key: string]: {
        CLIENT_ID: string;
    }
};

export type CBTConfig = {
    CLIENT_ID: string;
};

const ENVIRONMENTS: Environments = {
    'localhost': 'live',
    'budget.cecilias.me': 'live',
};

const ENVIRONMENT = ENVIRONMENTS[location.hostname];

const ENVIRONMENT_CONFIGS: CBTEnvironmentConfigs = {
    local: {
        CLIENT_ID: '962748511588-a96srks7mcmdfg0i3uh0ft8fk8lk8p2q.apps.googleusercontent.com'
    },
    live: {
        CLIENT_ID: '962748511588-v6a4eoj76mqjevdkhrkl1ubkadjfi7kj.apps.googleusercontent.com'
    }
};

export const CONFIG = {
    ...ENVIRONMENT_CONFIGS[ENVIRONMENT],
    ENVIRONMENT,
}