import React from "react";
import { Routes, Route } from 'react-router-dom'
import App from './App'
import { Meaningfulness } from "./articles/meaningfulness";
import { Manifesto } from "./articles/manifesto";
import { Waiting } from "./articles/waiting";
import { Frames } from "./articles/frames";
import { Sensorita } from "./articles/sensorita";
import { Bookingservice } from "./articles/bookingservice";
import {Home} from "./articles/home"


export default function Ruter() {
    return (
        <Routes>
             <Route
                exact path="/"
                element={<Home />}>
            </Route>

            <Route
                exact path="/about"
                element={<App />}>
            </Route>
            <Route
                exact path="/bookingservice"
                element={<Bookingservice />}>
            </Route>
            <Route
                exact path="/sensorita"
                element={<Sensorita />}>
            </Route>
            <Route
                exact path="/meaningful"
                element={<Meaningfulness />}>
            </Route>
            <Route
                exact path="/manifesto"
                element={<Manifesto />}>
            </Route>
            <Route
                exact path="/waiting"
                element={<Waiting />}>
            </Route>
            <Route
                exact path="/frames"
                element={<Frames />}>
            </Route>

        </Routes>
    )
}