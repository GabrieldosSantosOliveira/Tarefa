import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
export interface ArrowLeftProps extends SvgProps {
  isDark?: boolean;
}
export const ArrowLeft: React.FC<ArrowLeftProps> = (props) => (
  <Svg width={22} height={18} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.isDark ? '#fff' : '#000'}
        fillOpacity={0.85}
        d="M.067 8.898c0 .293.129.563.363.785l7.782 7.77c.234.223.48.328.761.328.575 0 1.032-.422 1.032-1.008 0-.281-.106-.562-.293-.738l-2.625-2.672-4.641-4.23-.246.574 3.773.234h14.825c.609 0 1.03-.433 1.03-1.043 0-.61-.421-1.043-1.03-1.043H5.973L2.2 8.09l.246.586 4.64-4.243 2.626-2.672c.187-.187.293-.457.293-.738 0-.586-.457-1.008-1.032-1.008-.28 0-.527.094-.785.352L.43 8.113c-.234.223-.363.492-.363.785Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill={props.isDark ? '#000' : '#fff'}
          d="M.067.015H21.83v17.777H.067z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
