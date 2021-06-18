import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {
    TextField,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createItem } from '../../actions/items';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Form = () => {
    const today = new Date();
    const todayPretty = today.toISOString().split('T')[0];

    const nextWeekUgly = today.setDate(today.getDate() + 7);
    const nextWeek = new Date(nextWeekUgly);
    const nextWeekPretty = nextWeek.toISOString().split('T')[0];

    const [itemData, setItemData] = useState({
        author: Cookies.get('username'),
        title: '',
        manufacturer: '',
        purchaseDate: todayPretty,
        bestBeforeDate: nextWeekPretty,
        amount: '',
        isPackaged: false,
        category: '',
        tags: '',
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createItem(itemData));
    };

    const handleChange = (event) => {
        itemData.category(event.target.value);
    };

    const clear = () => {};

    return (
        <Accordion className={classes.paper}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
            >
                <Typography className={classes.heading}>
                    Ein Produkt hinzufügen
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form
                    autoComplete='off'
                    noValidate
                    className={`${classes.root} ${classes.form}`}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        name='title'
                        variant='outlined'
                        label='Titel'
                        value={itemData.title}
                        onChange={(e) =>
                            setItemData({ ...itemData, title: e.target.value })
                        }
                    />

                    <TextField
                        name='manufacturer'
                        variant='outlined'
                        label='Hersteller'
                        value={itemData.manufacturer}
                        onChange={(e) =>
                            setItemData({
                                ...itemData,
                                manufacturer: e.target.value,
                            })
                        }
                    />
                    <TextField
                        variant='outlined'
                        id='buydate'
                        label='Kaufdatum'
                        type='date'
                        defaultValue={itemData.purchaseDate}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        variant='outlined'
                        id='bestBeforeDate'
                        label='Mindesthaltbarkeitsdatum'
                        type='date'
                        defaultValue={itemData.bestBeforeDate}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        name='amount'
                        type='number'
                        variant='outlined'
                        label='Menge'
                        value={itemData.ammount}
                        onChange={(e) =>
                            setItemData({
                                ...itemData,
                                ammount: e.target.value,
                            })
                        }
                    />
                    <FormControl className={classes.category}>
                        <InputLabel variant='outlined' id='category'>
                            Category
                        </InputLabel>
                        <Select
                            labelId='category'
                            id='category'
                            value={itemData.category}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        name='tags'
                        variant='outlined'
                        label='Tags'
                        value={itemData.tags}
                        onChange={(e) =>
                            setItemData({ ...itemData, tags: e.target.value })
                        }
                    />

                    <Button
                        className={classes.buttonSubmit}
                        variant='contained'
                        color='primary'
                        size='large'
                        type='submit'
                    >
                        HINZUFÜGEN
                    </Button>

                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={clear}
                    >
                        CLEAR
                    </Button>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default Form;
