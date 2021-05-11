import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from 'react-redux';
import moment from 'moment';


import useStyles from './styles';
import { createItem } from '../../actions/items';


const Form = () => {

    const today = new Date();
    const todayPretty = today.toISOString().split('T')[0];

    const nextWeekUgly = today.setDate(today.getDate() + 7);
    const nextWeek = new Date(nextWeekUgly);
    const nextWeekPretty = nextWeek.toISOString().split('T')[0];

    const [itemData, setItemData] = useState({
        title: '',
        manufacturer: '',
        purchaseDate: todayPretty,
        bestBeforeDate: nextWeekPretty,
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

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" >Ein Produkt hinzufügen</Typography>

                <TextField
                    label="Titel"
                    name="title"
                    variant="outlined"
                    fullWidth
                    value={itemData.title}
                    onChange={(e) => setItemData({ ...itemData, title: e.target.value })}
                />

                <TextField
                    label="Hersteller"
                    name="manufacturer"
                    variant="outlined"
                    fullWidth
                    value={itemData.manufacturer}
                    onChange={(e) => setItemData({ ...itemData, manufacturer: e.target.value })}
                />

                <TextField
                    label="Kaufdatum"
                    name="purchaseDate"
                    variant="outlined"
                    fullWidth
                    type="date"
                    defaultValue={itemData.purchaseDate}
                    onChange={(e) => setItemData({ ...itemData, purchaseDate: e.target.value })}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    label="Mindesthaltbarkeitsdatum"
                    name="bestBeforeDate"
                    fullWidth
                    variant="outlined"
                    type="date"
                    defaultValue={itemData.bestBeforeDate}
                    onChange={(e) => setItemData({ ...itemData, bestBeforeDate: e.target.value })}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    label="Menge"
                    name="ammount"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={itemData.ammount}
                    onChange={(e) => setItemData({ ...itemData, ammount: e.target.value })}
                />

                <TextField
                    label="Tags"
                    name="tags"
                    variant="outlined"
                    fullWidth
                    value={itemData.tags}
                    onChange={(e) => setItemData({ ...itemData, tags: e.target.value })}
                />

                {/* <FormControlLabel control={<Checkbox onChange={(e) => setItemData({ ...itemData, isPackaged: e.target.value })} name="isPackaged" />} label="verpackt" /> */}

                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>
                    HINZUFÜGEN
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth>
                    CLEAR
                </Button>
            </form>

        </Paper>
    );
};

export default Form;