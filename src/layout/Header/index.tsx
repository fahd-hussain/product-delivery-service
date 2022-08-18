import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Box className="_layout_header" sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" className="_layout_header_app_bar">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="_layout_header_app_bar_logo"
          >
            Product Delivery Service
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
