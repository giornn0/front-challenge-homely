import { CardContent } from "@mui/material";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { createService, getAllServiceTypes } from "../../services/http/service";
import { RoleContext } from "../../states/context";

const ServiceCreate= ()=>{
  const {role} = useContext(RoleContext);

  const [service, setForm] = useState({
    type_id: null,
    name: null,
    description: null,
    cost: null,
  });

  const [serviceTypes, setServiceTypes] = useState(null)

  useEffect(()=>{
    getAllServiceTypes({role, setServiceTypes})
  },[])
  
  const change= (control, value)=>{
    setForm((prev)=>({...prev,[control]:value}));
  }

  const submit = ()=>{
    createService({service,role})
  }

  return(
    <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '100%', marginY: '1rem' },
                    '& .MuiOutlinedInput-root': { width: '100%'},
                }}
                validate={true}
                className='flex justify-center'
                autoComplete="off"
            >
                <Card sx={{ minWidth: 275, maxWidth: 800 }}>
                    <CardContent>
                        <TextField
                            className="w-full"
                            label="Tipo Servicio"
                            id="service"
                            value={service.type_id ||0}
                            onChange={(e) => {
                                change('type_id', e.target.value)
                            }}
                            select
                            required
                        >
                            <MenuItem value={0}>
                                Seleccione un tipo
                            </MenuItem>
                            {serviceTypes?.map((option, index) => (
                                <MenuItem key={index} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            className="w-full"
                            onChange={(e) => {
                                change('name', e.target.value)
                            }}
                            id="name"
                            label="Nombre"
                            type="text"
                            required

                        />
                        <TextField
                            className="w-full"
                            onChange={(e) => {
                                change('cost', e.target.value)
                            }}
                            id="cost"
                            label="Costo"
                            type="number"
                            required
                        />
                        <TextField
                            className="w-full"
                            onChange={(e) => {
                                change('description', e.target.value)
                            }}
                            id="description"
                            multiline
                            label="Descripción"
                            type="text"
                            required

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
  )
}

export default ServiceCreate;