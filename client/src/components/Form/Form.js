import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from 'react-redux';
import moment from 'moment';


import useStyles from './styles';
import { createItem } from '../../actions/items';


const Form = () => {
    const [itemData, setItemData] = useState({
        title: '',
        manufacturer: '',
        purchaseDate: new Date(),
        bestBeforeDate: '',
        ammount: '',
        isPackaged: false,
        tags: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createItem(itemData));
    }

    const clear = () => {

    }

    const correctDateFormat = (input) => {
        return moment(input, "DD.MM.YYYY", true).isValid();
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" >Ein Produkt hinzufügen</Typography>

                <TextField name="title" variant="outlined" label="Titel" fullWidth value={itemData.title} onChange={(e) => setItemData({ ...itemData, title: e.target.value })} />

                <TextField name="manufacturer" variant="outlined" label="Hersteller" fullWidth value={itemData.manufacturer} onChange={(e) => setItemData({ ...itemData, manufacturer: e.target.value })} />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <DatePicker
                        variant="inline"
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        autoOk
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={itemData.purchaseDate}
                        onChange={(e) => setItemData({ ...itemData, purchaseDate: e.target.value })}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </MuiPickersUtilsProvider>


                <TextField errorText="wow" name="purchaseDate" variant="outlined" label="Kaufdatum" fullWidth value={itemData.purchaseDate} onChange={(e) => {
                    setItemData({ ...itemData, purchaseDate: e.target.value });
                }} />


                <TextField type="Number" name="bestBeforeDate" variant="outlined" label="Mindesthaltbarkeitsdatum" fullWidth value={itemData.bestBeforeDate} onChange={(e) => {
                    setItemData({ ...itemData, bestBeforeDate: e.target.value });
                    correctDateFormat(e.target.value);
                }} />

                <TextField name="ammount" variant="outlined" label="Menge" fullWidth value={itemData.ammount} onChange={(e) => setItemData({ ...itemData, ammount: e.target.value })} />

                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={itemData.tags} onChange={(e) => setItemData({ ...itemData, tags: e.target.value })} />

                {/* <FormControlLabel control={<Checkbox onChange={(e) => setItemData({ ...itemData, isPackaged: e.target.value })} name="isPackaged" />} label="verpackt" /> */}

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>HINZUFÜGEN</Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>CLEAR</Button>
            </form>

        </Paper>
    );
};

export default Form;