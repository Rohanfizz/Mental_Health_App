import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ProfileInfo from "../../src/components/ProfilePage/ProfileInfo";
import ProgressDoghnut from "../../src/components/ProfilePage/ProgressDoghnut";
import RecoveryReport from "../../src/components/ProfilePage/RecoveryReport";
import TestReports from "../../src/components/ProfilePage/TestReports";

const profileCard = {
    bg: "blue.100",
    h: "200%",
    borderRadius: "1rem",
};
const profileCardMain = {
    bg: "teal.500",
    h: "100%",
    borderRadius: "1rem",
    color: "white",
};
function Profile() {
    return (
        <Grid
            h="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={"1rem"}
            p="1rem"
            bg="teal.900"
            // border="3px solid yellow"
        >
            <GridItem colSpan={3} sx={profileCardMain}>
                <ProfileInfo />
            </GridItem>
            <GridItem colSpan={1} sx={profileCard}>
                <ProgressDoghnut />
            </GridItem>
            <GridItem colSpan={1} sx={profileCard}>
                <TestReports />
            </GridItem>
            <GridItem colSpan={1} sx={profileCard}>
                {/* <RecoveryReport /> */}
            </GridItem>
        </Grid>
    );
}

export default Profile;
