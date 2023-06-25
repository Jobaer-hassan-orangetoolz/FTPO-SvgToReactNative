import React from "react";
import Svg, { Path } from 'react-native-svg'

const CartIcon = ({width=24, height=24, fill='#818688'}) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
       <Path
        d="M2.58333 20.167C2.07917 20.167 1.64757 19.9875 1.28854 19.6285C0.929514 19.2694 0.75 18.8378 0.75 18.3337V7.33366C0.75 6.82949 0.929514 6.39789 1.28854 6.03887C1.64757 5.67984 2.07917 5.50033 2.58333 5.50033H4.41667C4.41667 4.23227 4.86354 3.15137 5.75729 2.25762C6.65104 1.36387 7.73194 0.916992 9 0.916992C10.2681 0.916992 11.349 1.36387 12.2427 2.25762C13.1365 3.15137 13.5833 4.23227 13.5833 5.50033H15.4167C15.9208 5.50033 16.3524 5.67984 16.7115 6.03887C17.0705 6.39789 17.25 6.82949 17.25 7.33366V18.3337C17.25 18.8378 17.0705 19.2694 16.7115 19.6285C16.3524 19.9875 15.9208 20.167 15.4167 20.167H2.58333ZM9 12.8337C10.2681 12.8337 11.349 12.3868 12.2427 11.493C13.1365 10.5993 13.5833 9.51838 13.5833 8.25033H11.75C11.75 9.01421 11.4826 9.66352 10.9479 10.1982C10.4132 10.733 9.76389 11.0003 9 11.0003C8.23611 11.0003 7.58681 10.733 7.05208 10.1982C6.51736 9.66352 6.25 9.01421 6.25 8.25033H4.41667C4.41667 9.51838 4.86354 10.5993 5.75729 11.493C6.65104 12.3868 7.73194 12.8337 9 12.8337ZM6.25 5.50033H11.75C11.75 4.73644 11.4826 4.08713 10.9479 3.55241C10.4132 3.01769 9.76389 2.75033 9 2.75033C8.23611 2.75033 7.58681 3.01769 7.05208 3.55241C6.51736 4.08713 6.25 4.73644 6.25 5.50033Z"
        fill="#818688"
      />
    </Svg>
);
export default CartIcon;