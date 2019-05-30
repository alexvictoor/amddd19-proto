import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { SvgIcon } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';

const styles = {
    tabs: {
        background: '#fff',
    },
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#B3DC4A',
    },
    slide2: {
        backgroundColor: '#FEA900',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};


function SeatIcon(props: any) {
    return (
        <SvgIcon {...props} style={{ fontSize: 18 }} >
            <path d="M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V13Z" />
        </SvgIcon>
    );
}

class DemoTabs extends React.Component {
    state = {
        index: 0,
    };

    handleChange = (event: any, value: number) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = (index: number) => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;

        return (
            <div style={{ position: 'relative' }}>
                <Tabs value={index} onChange={this.handleChange} style={styles.tabs}>
                    <Tab label="tab n°1" />
                    <Tab label="tab n°2" />
                    <Tab label="tab n°3" />
                </Tabs>
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <div style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="error" />
                            <SeatIcon color="primary" />
                            <SeatIcon color="secondary" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>


                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}>
                        slide n°2
            <Select value={10} autoWidth={false}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
                </SwipeableViews>
            </div>
        );
    }
}

export default DemoTabs;