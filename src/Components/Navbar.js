/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/company-logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PortraitIcon from '@mui/icons-material/Portrait';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, href: "home", type: "anchor" },
    { text: "About", icon: <InfoIcon />, href: "about", type: "anchor" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, href: "testimonials", type: "anchor" },
    { text: "Blogs", icon: <CommentRoundedIcon />, href: "/blogs", type: "link" },
    { text: "Founder", icon: <PortraitIcon />, href: "founder", type: "anchor" },
    { text: "Contact", icon: <PhoneRoundedIcon />, href: "contact", type: "anchor" }
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <button className="nav-btn-link" onClick={() => handleScroll("home")}>Home</button>
        <button className="nav-btn-link" onClick={() => handleScroll("about")}>About</button>
        <button className="nav-btn-link" onClick={() => handleScroll("testimonials")}>Testimonials</button>
        <Link to="/blogs">Blogs</Link>
        <button className="nav-btn-link" onClick={() => handleScroll("founder")}>Founder</button>
        <button className="nav-btn-link" onClick={() => handleScroll("contact")}>Contact</button>
        <button className="primary-button" onClick={() => handleScroll("contact")}>Get Quotes</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                {item.type === "link" ? (
                  <ListItemButton component={Link} to={item.href} >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                ) : (
                  <ListItemButton component="button" onClick={() => handleScroll(item.href)} >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
