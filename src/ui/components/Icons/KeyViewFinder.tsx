import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
export interface KeyViewFinderProps extends SvgProps {
  isDark?: boolean;
}
export const KeyViewFinder: React.FC<KeyViewFinderProps> = (props) => (
  <Svg width={29} height={30} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.isDark ? '#fff' : '#000'}
        fillOpacity={0.85}
        d="M13.116 28.959c.492.41 1.16.469 1.63.012l3.62-3.621c.457-.47.434-1.172-.011-1.63l-1.817-1.804 2.648-2.637c.458-.445.434-1.16-.011-1.629l-2.45-2.46c3.223-1.547 5.04-4.172 5.04-7.29 0-4.324-3.504-7.816-7.829-7.816-4.359 0-7.84 3.469-7.84 7.816 0 3.141 1.805 5.93 4.653 7.184v11.063c0 .386.117.832.457 1.136l1.91 1.676Zm.82-1.852-1.3-1.289V13.725c-2.754-.621-4.664-3-4.664-5.825 0-3.28 2.66-5.93 5.965-5.93a5.924 5.924 0 0 1 5.94 5.93c0 2.801-1.92 5.204-4.862 5.907v2.367l2.296 2.308-2.484 2.45v1.945l1.664 1.64-2.554 2.59Zm0-19.558a1.908 1.908 0 0 0 1.899-1.91 1.896 1.896 0 0 0-1.899-1.887 1.88 1.88 0 0 0-1.898 1.887 1.9 1.9 0 0 0 1.899 1.91Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill={props.isDark ? '#000' : '#fff'}
          d="M6.097.084h15.668v29.355H6.097z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
