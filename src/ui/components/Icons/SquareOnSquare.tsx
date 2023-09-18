import React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
export interface SquareOnSquareProps extends SvgProps {
  isDark?: boolean;
}
export const SquareOnSquare: React.FC<SquareOnSquareProps> = (props) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.isDark ? '#fff' : '#000'}
        fillOpacity={0.85}
        d="M3.753 19.281H15.52c2.437 0 3.668-1.218 3.668-3.633V3.79c0-2.414-1.23-3.633-3.668-3.633H3.753C1.293.156.073 1.375.073 3.79v11.86c0 2.414 1.22 3.632 3.68 3.632Zm.024-1.886c-1.172 0-1.817-.633-1.817-1.852V3.895c0-1.22.645-1.852 1.817-1.852h11.707c1.16 0 1.816.633 1.816 1.852v11.648c0 1.219-.656 1.852-1.816 1.852H3.777Z"
      />
      <Path
        fill={props.isDark ? '#000' : '#fff'}
        d="M9.437 24.707h11.765c2.438 0 3.668-1.219 3.668-3.633V9.214c0-2.413-1.23-3.632-3.668-3.632H9.437c-2.461 0-3.68 1.207-3.68 3.633v11.86c0 2.413 1.219 3.632 3.68 3.632Z"
      />
      <Path
        fill={props.isDark ? '#fff' : '#000'}
        fillOpacity={0.85}
        d="M9.437 24.707h11.765c2.438 0 3.668-1.219 3.668-3.633V9.214c0-2.413-1.23-3.632-3.668-3.632H9.437c-2.461 0-3.68 1.207-3.68 3.633v11.86c0 2.413 1.219 3.632 3.68 3.632Zm.023-1.887c-1.16 0-1.816-.633-1.816-1.851V9.32c0-1.218.656-1.851 1.816-1.851h11.707c1.16 0 1.817.633 1.817 1.851V20.97c0 1.218-.657 1.851-1.817 1.851H9.46Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill={props.isDark ? '#000' : '#fff'}
          d="M.073.133H24.87v24.574H.073z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
