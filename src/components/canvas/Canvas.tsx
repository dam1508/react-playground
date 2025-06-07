import React from "react";
import "./Canvas.css";
import { Box, Container } from "@mui/material";

const Canvas = ({ children }: { children: React.ReactNode }) => {
   return (
      <Box sx={{ bgcolor: "hsl(207, 26%, 17%)", minHeight: "100vh" }}>
         <Container
            maxWidth="lg"
            sx={{ minHeight: "100vh", height: "100%" }}
         >
            {children}
         </Container>
      </Box>
   );
};

export default Canvas;
