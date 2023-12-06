declare module '*.scss' {
    interface IClassNames {
        [classname: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
