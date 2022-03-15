import React from "react";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import { Box } from "@chakra-ui/react";

const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "0.5rem",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};
function GoogleMapInstance() {
    return (
        <Box h="50%" w="70%">
            <LoadScriptNext 
            // googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkSOojhzuq7aPIB9JrZu66JDM6xewBLwQ&libraries=places&callback=initMap"
            googleMapsApiKey="AIzaSyDkSOojhzuq7aPIB9JrZu66JDM6xewBLwQ"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                />
            </LoadScriptNext>
        </Box>
    );
}

export default GoogleMapInstance;
