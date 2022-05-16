import React, { useEffect, useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import LoupeIcon from '@mui/icons-material/Loupe'

const ListItemCompo = ({
    mainIcon,
    open,
    index,
    option,
    setOpen,
    collapsable,
    details,
    header,
    handleClick,
}) => {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        if (open === index) {
            setOpened(true)
        } else {
            setOpened(false)
        }
    }, [open])

    if (!handleClick) {
        handleClick = (index) => {
            if (collapsable) {
                console.log(open, index)
                if (open == index) {
                    setOpen(null)
                } else {
                    setOpen(index)
                }
            }
        }
    }

    return (
        <>
            <ListItemButton
                onClick={() => {
                    handleClick(index)
                }}
            >
                <ListItemIcon>{mainIcon}</ListItemIcon>
                <ListItemText primary={option[header] || option?.name} />
                {collapsable&&(opened? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {details?.map((detail, index) => (
                        <ListItemButton key={`detail-${index}`} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                {detail.icon ? detail.icon : <LoupeIcon />}
                            </ListItemIcon>
                            <ListItemText primary={option[detail.access]} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    )
}

export default ListItemCompo
