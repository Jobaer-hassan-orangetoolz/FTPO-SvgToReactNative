import React from "react";
import Svg, { Path } from 'react-native-svg'

const SortIcon = ({width=24, height=24, fill='#818688'}) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.959961 2.16695C0.959961 1.31643 1.64944 0.626953 2.49996 0.626953H23.5C24.3505 0.626953 25.04 1.31643 25.04 2.16695C25.04 3.01747 24.3505 3.70695 23.5 3.70695H2.49996C1.64944 3.70695 0.959961 3.01747 0.959961 2.16695ZM4.45996 8.00029C4.45996 7.14977 5.14944 6.46029 5.99996 6.46029H20C20.8505 6.46029 21.54 7.14977 21.54 8.00029C21.54 8.85081 20.8505 9.54029 20 9.54029H5.99996C5.14944 9.54029 4.45996 8.85081 4.45996 8.00029ZM9.12663 13.8336C9.12663 12.9831 9.81611 12.2936 10.6666 12.2936H15.3333C16.1838 12.2936 16.8733 12.9831 16.8733 13.8336C16.8733 14.6841 16.1838 15.3736 15.3333 15.3736H10.6666C9.81611 15.3736 9.12663 14.6841 9.12663 13.8336Z"
        fill="#43494D"
      />
    </Svg>
);
export default SortIcon;