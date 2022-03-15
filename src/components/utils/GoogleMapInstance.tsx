import React from "react";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import { Box } from "@chakra-ui/react";

const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "0.5rem",
};

const position = {
    lat: -3.745,
    lng: -38.523,
};
const center = {
    lat: 37.772,
    lng: -122.214,
};

function GoogleMapInstance() {
    const onLoadHandler = (marker: any) => {
        console.log("marker : ", marker);
    };

    return (
        <Box
            h="80%"
            w="80%"
            display="flex"
            alignItems={"center"}
            justifyContent="center"
        >
            <LoadScriptNext
                // googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkSOojhzuq7aPIB9JrZu66JDM6xewBLwQ&libraries=places&callback=initMap"
                googleMapsApiKey="AIzaSyDkSOojhzuq7aPIB9JrZu66JDM6xewBLwQ"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={4}
                >
                    <Marker onLoad={onLoadHandler} position={position} />
                </GoogleMap>
            </LoadScriptNext>
        </Box>
    );
}

export default GoogleMapInstance;
