import React, { FC } from "react"
import { Box, ListItemButton, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom"
import ListItemIcon from "@mui/material/ListItemIcon"
import { colorsBis } from "../../utils/constants/constants"

type ListItemLinkProps = {
  to: string
  pathname: string
  title: string
  icon?: React.ReactElement
}

export const ListItemLink: FC<ListItemLinkProps> = ({ icon, pathname, title, to }: ListItemLinkProps) => {
  return (
    <ListItemButton>
      <NavLink to={to} style={{ textDecoration: "none" }}>
        <Box display="flex">
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText
            primary={title}
            inset={!icon}
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: colorsBis.white,
              ...(location.pathname === pathname && {
                textDecoration: "underline",
                fontStyle: "italic",
              }),
            }}
          />
        </Box>
      </NavLink>
    </ListItemButton>
  )
}
