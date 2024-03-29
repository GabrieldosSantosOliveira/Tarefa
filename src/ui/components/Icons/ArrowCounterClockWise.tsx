import { FC } from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
export interface ArrowCounterClockWiseProps extends SvgProps {
  isDark?: boolean;
}
export const ArrowCounterClockWise: FC<ArrowCounterClockWiseProps> = (
  props,
) => (
  <Svg width={21} height={29} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.isDark ? '#fff' : '#000'}
        fillOpacity={0.85}
        d="M.071 14.872a10.335 10.335 0 0 0 10.36 10.371 10.325 10.325 0 0 0 10.347-10.37A10.313 10.313 0 0 0 10.431 4.523c-.727 0-1.418.082-2.028.2l3.117-3.082a.958.958 0 0 0 .258-.668c0-.54-.398-.961-.914-.961-.293 0-.527.093-.691.28l-4.828 4.9a1.004 1.004 0 0 0-.293.703c0 .269.094.503.293.703l4.828 4.851c.176.176.398.27.68.27.527 0 .925-.399.925-.938a.92.92 0 0 0-.27-.668L8.018 6.646c.68-.165 1.511-.235 2.414-.235 4.699 0 8.46 3.762 8.46 8.461a8.44 8.44 0 0 1-8.46 8.485 8.45 8.45 0 0 1-8.473-8.485c0-.562-.352-.973-.914-.973-.574 0-.973.41-.973.973Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill={props.isDark ? '#000' : '#fff'}
          d="M.071.013h20.707v28.043H.071z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
