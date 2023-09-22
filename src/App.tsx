import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useContext, useMemo } from "react";
import { ThemeContext } from "./theme";

function App() {
  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);
  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          padding: "0px !important",
        }}
      >
        <AppBar
          position="static"
          sx={{
            padding: "0px !important",
            bgcolor: theme.palette.background.default,
          }}
        >
          <Toolbar>
            <Box flex={1}></Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={`Activate ${activateName} Mode`}>
                <IconButton
                  onClick={switchColorMode}
                  sx={{
                    p: 1,
                    border: `1px ${theme.palette.text.disabled} solid`,
                  }}
                  size="large"
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <LightModeOutlined />
                  ) : (
                    <DarkModeOutlined color="action" />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default App;
