import React from "react";
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminCompleteDialog from './AdminPortalDialogs/AdminCompleteDialog';
import AdminDetailsDialog from './AdminPortalDialogs/AdminDetailsDialog'
import FilterBar from '../../FilterBar/FilterBar';

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import '../ArtistPortal.css'

export default function ArtistSBRequestsTab({artistId}) {


    useEffect(() => {
        dispatch({ type: "FETCH_ARTIST_REQUESTS",
                    payload: artistId});
      }, [])
    const artistRequests = useSelector(store => store.artistRequests)
    console.log("artist requests:", artistRequests)


    return (
        <div className="tab-body">
            
        </div>
    )
}
