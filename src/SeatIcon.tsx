import React from "react";
import { SvgIcon } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function SeatIcon(props: any) {
    const displayOnLargeScreen = useMediaQuery('(min-width:768px)');
    const fontSize = displayOnLargeScreen ? 42 : 18;
    return (
        <SvgIcon {...props} style={{ ...props.style, fontSize }} >
            <path d="M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V13Z" />
        </SvgIcon>
    );
  }