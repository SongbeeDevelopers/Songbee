import React from "react"

import { AnimatePresence } from "framer-motion"

// tracks changes in the url /router
// necessary workaround for animating routes
function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>
}

export default LocationProvider
