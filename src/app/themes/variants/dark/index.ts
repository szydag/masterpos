import {
    DesignTokens,
    Typography,
    Colors
} from "@/app/types";

type Theme = {
    key: string;
    designTokens: DesignTokens;
    typography: Typography;
    colors: Colors;
};

export const colors: Colors = {
    white: "#FFFFFF",
    blue: "#4F56D3"
};

export const typography: Typography = {
    label: {
        fontFamily: "Cairo, sans-serif",
        fontWeight: "400",
        fontSize: 14
    }
};

export const designTokens: DesignTokens = {
    spaces: {
        container: 16,
        content: 8,
        inline: 4,
        item: 16
    },
    borders: {
        indicator: 2,
        line: 1
    },
    radiuses: {
        quarter: 4,
        hard: 12,
        half: 8
    },
    disabled: {
        opacity: 0.33
    }
};

const theme: Theme = {
    key: "dark",
    designTokens,
    typography,
    colors
};

export default theme;
