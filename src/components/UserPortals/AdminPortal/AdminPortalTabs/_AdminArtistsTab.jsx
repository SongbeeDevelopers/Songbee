import React from "react";
import { useState } from "react";

import AdminArtistListTab from "./AdminArtistListTab";
import AdminArtistApplicationsTab from "./AdminArtistApplicationsTab"
import AdminArtistsPendingEdits from "./AdminArtistEdits";

import {
    Box,
    Tab,
    Tabs,
    Typography,
} from '@mui/material'
import PropTypes from 'prop-types';

import '../AdminPortal.css'


export default function AdminMainTab() {

    const [value, setValue] = useState(0);

    // MUI tab structure
    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const CustomTabPanel = (props) => {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    // end of tab structure


    return (
        <div className="admin-tabs-container">
            <Box display="flex" justifyContent="center" width="100%">
                <Tabs value={value} onChange={handleChange} variant="scrollable" centered>
                    <Tab label="Artist List" {...a11yProps(0)} />
                    <Tab label="Artist Applications" {...a11yProps(1)} />
                    {/* <Tab label="Artist Edits" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <AdminArtistListTab />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <AdminArtistApplicationsTab />
            </CustomTabPanel>

            {/* <CustomTabPanel value={value} index={2}>
                <AdminArtistsPendingEdits />
            </CustomTabPanel> */}
        </div>
    )
}
