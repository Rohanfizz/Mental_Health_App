import * as React from "react";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Typography from "@mui/material/Typography";
import { Box } from "@chakra-ui/react";

export default function TimelineComponent() {
    const theme = createMuiTheme();
    return (
        <ThemeProvider theme={theme}>
            <Timeline position="alternate">
                <TimelineItem>
                    {/* <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        9:30 am
                    </TimelineOppositeContent> */}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <HowToRegIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h5" component="span">
                            Register
                        </Typography>
                        <Typography>It&apos;s Free!</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    {/* <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                    >
                        10:00 am
                    </TimelineOppositeContent> */}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "50px", px: 2 }}>
                        <Typography variant="h5" component="span">
                            Assess Yourself
                        </Typography>
                        <Typography>Choose From the Best Interactive Tests</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <DoneAllIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "50px", px: 2 }}>
                        <Typography variant="h5" component="span">
                            Check Result
                        </Typography>
                        <Typography>Because It&apos;s Simple</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                            <LocalHospitalIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "50px", px: 2 }}>
                        <Typography variant="h5" component="span">
                            Get Support
                        </Typography>
                        <Typography>
                        Because it&apos;s Needed!
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </ThemeProvider>
    );
}
