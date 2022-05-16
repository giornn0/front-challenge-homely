import { FormControl } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { InputLabel } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { Card } from '@mui/material'
import { Box, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { getServices } from '../../services/http/service'
import { createTicket } from '../../services/http/ticket'
import { RoleContext } from '../../states/context'

const TicketCreate = () => {
    const [ticket, setTicket] = useState({})
    const { role } = useContext(RoleContext)
    const [services, setServices] = useState(null)

    useEffect(() => {
        getServices({ role, setServices })
    }, [])

    const change = (control, value) => {
        setTicket((prev) => ({ ...prev, [control]: value }))
        console.log(ticket)
    }

    const submit= ()=>{
      createTicket({role,ticket})
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '100%', marginY: '1rem' },
                    '& .MuiOutlinedInput-root': { width: '100%' },
                }}
                validate={true}
                className="flex justify-center"
                autoComplete="off"
            >
                <Card sx={{ minWidth: 275, maxWidth: 800 }}>
                    <CardContent>
                        <TextField
                            className="w-full"
                            label="Servicio"
                            id="service"
                            value={ticket.servicio_id || 0}
                            onChange={(e) => {
                                change('service_id', e.target.value)
                            }}
                            select
                        >
                            <MenuItem value={0}>
                                Seleccione un servicio
                            </MenuItem>
                            {services?.map((option, index) => (
                                <MenuItem key={index} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            className="w-full"
                            onChange={(e) => {
                                change('description', e.target.value)
                            }}
                            id="description"
                            multiline
                            label="Descripción"
                            type="text"
                        />
                    </CardContent>
                    <CardActions
                        className="flex justify-between"
                        sx={{
                            '&': { padding: '1rem' },
                        }}
                    >
                        <Button color="warning" variant="contained">
                            Cancelar
                        </Button>
                        <Button onClick={submit} color="success" variant="contained">
                            Guardar
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
export default TicketCreate
