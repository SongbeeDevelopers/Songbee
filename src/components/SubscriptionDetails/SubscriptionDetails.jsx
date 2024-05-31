import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import PropTypes from "prop-types";
import {
    Box,
    Button,
    Checkbox,
    Tab,
    Tabs,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography
} from "@mui/material"

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


// This function will display the user's song request with a player so they can review their song
export default function SubDetails({ routeVariants }) {

    // hooks
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch({ type: 'FETCH_CURRENT_SUBSCRIPTION', payload: id })
    }, [])

    const sub = useSelector(store => store.currentSubscription)

    return (
        <>
            <motion.div
                className='container songDetails'
                variants={routeVariants}
                initial="initial"
                animate="final"
            >
                <h2>{sub.title}</h2>
                <p>For {sub.name}</p>
                <p>{sub.age}</p>

                <Link to={`${sub.play_guide}`} >
                    Play Guide
                </Link>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Song Title</TableCell>
                            <TableCell align="center">Song Track</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* song 1 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song1_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song1}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 2 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song2_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song2}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 3 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song3_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song3}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 4 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song4_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song4}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 5 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song5_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song5}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 6 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song6_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song6}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 7 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song7_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song7}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 8 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song8_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song8}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 9 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song9_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song9}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 10 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song10_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song10}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 11 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song11_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song11}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 12 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song12_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song12}`} />
                            </TableCell>
                        </TableRow>

                        {/* song 13 */}
                        <TableRow>
                            {/* song title */}
                            <TableCell>
                                {sub.song13_name}
                            </TableCell>
                            {/* song player */}
                            <TableCell align="center">
                                <audio controls src={`${sub.song13}`} />
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

                <Button variant="contained"
                    onClick={() => history.goBack()}
                    sx={{ mt: 5, height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                > BACK
                </Button>

            </motion.div >
        </>
    )
}
