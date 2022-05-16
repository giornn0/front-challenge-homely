import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'

import React, { useState } from 'react'
import ListItemCompo from './ListItemCompo'
import Spinner from './Spinner'

const ListCompo = ({ title, list, collapsable, mainIcon,details, header, handleClick }) => {
    const [open, setOpen] = useState(null)

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="flex flex-col justify-center"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    {title}
                </ListSubheader>
            }
        > 
            {!list?<Spinner />:list?.map((option, index) => (
                <ListItemCompo
                    key={index}
                    option={option}
                    open={open}
                    mainIcon={mainIcon}
                    index={index}
                    setOpen={setOpen}
                    collapsable={collapsable}
                    details={details}
                    header={header}
                    handleClick={handleClick}
                />
            ))}
        </List>
    )
}

export default ListCompo
