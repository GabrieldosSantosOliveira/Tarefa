import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
export const PlusMinusCircle: React.FC<SvgProps> = (props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillOpacity={0.85}
        d="M.023 9.78c0 .574.48 1.043 1.043 1.043h7.582v7.582c0 .562.469 1.043 1.043 1.043s1.055-.48 1.055-1.043v-7.582h7.57c.563 0 1.043-.469 1.043-1.043s-.48-1.055-1.043-1.055h-7.57v-7.57c0-.563-.48-1.043-1.055-1.043-.574 0-1.043.48-1.043 1.043v7.57H1.066c-.562 0-1.043.48-1.043 1.055Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.023.112H19.36V19.46H.023z" />
      </ClipPath>
    </Defs>
  </Svg>
);
