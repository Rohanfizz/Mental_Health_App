import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
    const router = useRouter();
    const isLoginSignup = router.pathname === "/" || router.pathname ==="/signup";
    return (
        <>
            {!isLoginSignup && <NavBar />}
            <Box width="100%" height={isLoginSignup?"100vh":"calc(100vh - 5.5rem)"} overflow={"auto"}>
                {children}
            </Box>
            {!isLoginSignup && <Footer />}
        </>
    );
};
export default Layout;
