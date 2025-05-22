type Colors = {
    white: string;
    blue: string;
};

type Typography = {
    label: {
        fontFamily: string;
        fontWeight: string;
        fontSize: number;
    };
};


type DesignTokens = {
    spaces: {
        container: number;
        content: number;
        inline: number;
        item: number;
    };
    borders: {
        indicator: number;
        line: number;
    };
    radiuses: {
        quarter: number;
        hard: number;
        half: number;
    };
    disabled: {
        opacity: number;
    };
};

type Translations = {
    title: string;
    subtitle: string;
};

export type {
    DesignTokens,
    Translations,
    Typography,
    Colors
};