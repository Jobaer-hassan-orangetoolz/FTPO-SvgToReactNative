import React from "react";
import Svg, { Path } from 'react-native-svg'

const ShareIcon = ({width=24, height=24, fill='#818688'}) => (
  <Svg
  width={width}
  height={height}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  // {...props}
>
  <G clipPath="url(#clip0_121_3077)">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.48034 3.48034C5.09896 1.86172 7.29427 0.952393 9.58334 0.952393C10.7168 0.952393 11.8391 1.17564 12.8863 1.60938C13.9334 2.04313 14.8849 2.67888 15.6863 3.48034C16.4878 4.2818 17.1236 5.23327 17.5573 6.28042C17.9911 7.32758 18.2143 8.44991 18.2143 9.58334C18.2143 10.7168 17.9911 11.8391 17.5573 12.8863C17.1236 13.9334 16.4878 14.8849 15.6863 15.6863C14.8849 16.4878 13.9334 17.1236 12.8863 17.5573C11.8391 17.9911 10.7168 18.2143 9.58334 18.2143C7.29427 18.2143 5.09896 17.305 3.48034 15.6863C1.86172 14.0677 0.952393 11.8724 0.952393 9.58334C0.952393 7.29427 1.86172 5.09896 3.48034 3.48034ZM9.58334 2.38096C7.67316 2.38096 5.8412 3.13978 4.49049 4.49049C3.13978 5.8412 2.38096 7.67316 2.38096 9.58334C2.38096 11.4935 3.13978 13.3255 4.49049 14.6762C5.8412 16.0269 7.67316 16.7857 9.58334 16.7857C10.5292 16.7857 11.4657 16.5994 12.3396 16.2375C13.2134 15.8755 14.0074 15.345 14.6762 14.6762C15.345 14.0074 15.8755 13.2134 16.2375 12.3396C16.5994 11.4657 16.7857 10.5292 16.7857 9.58334C16.7857 8.63751 16.5994 7.70095 16.2375 6.82711C15.8755 5.95328 15.345 5.1593 14.6762 4.49049C14.0074 3.82169 13.2134 3.29117 12.3396 2.92921C11.4657 2.56726 10.5292 2.38096 9.58334 2.38096ZM16.1616 16.1616C16.4405 15.8827 16.8928 15.8827 17.1718 16.1616L18.8384 17.8283C19.1174 18.1072 19.1174 18.5595 18.8384 18.8384C18.5595 19.1174 18.1072 19.1174 17.8283 18.8384L16.1616 17.1718C15.8827 16.8928 15.8827 16.4405 16.1616 16.1616Z"
      fill={fill}
    />
    <Path
      d="M14.9643 9.64287C14.9643 12.6015 12.5658 15 9.60715 15C6.64849 15 4.25001 12.6015 4.25001 9.64287C4.25001 6.6842 6.64849 4.28573 9.60715 4.28573C12.5658 4.28573 14.9643 6.6842 14.9643 9.64287Z"
      fill={fill}
    />
  </G>
  <Defs>
    <ClipPath id="clip0_121_3077">
      <Rect width={width} height={height} fill={fill} />
    </ClipPath>
  </Defs>
</Svg>
);
export default ShareIcon;