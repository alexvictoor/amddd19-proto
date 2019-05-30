import React from "react";
import { SvgIcon } from '@material-ui/core';


export default function SeatIcon(props: any) {
    return (
        <SvgIcon {...props} style={{ fontSize: 18 }} >
            <path d="M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V13Z" />
        </SvgIcon>
    );
  }