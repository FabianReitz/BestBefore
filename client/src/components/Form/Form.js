import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {
    TextField,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    MenuItem,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createItem } from '../../actions/items';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Form = () => {
    const categories = [
        {
            value: 'eggs',
            label: 'Eier',
        },
        {
            value: 'packaged',
            label: 'Verpackt',
        },
        {
            value: 'fruit',
            label: 'Obst',
        },
        {
            value: 'liquor',
            label: 'Spirituose',
        },
        {
            value: 'meat',
            label: 'Fleisch',
        },
        {
            value: 'milkproduct',
            label: 'Milchprodukt',
        },
        {
            value: 'vegetable',
            label: 'Gemüse',
        },
        {
            value: 'softdrink',
            label: 'Softdrink',
        },
    ];

    const [category, setCategory] = React.useState();

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
        category: '',
        tags: [],
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createItem(itemData));
        // setItemData({
        //     title: '',
        //     manufacturer: '',
        //     amount: '',
        //     category: '',
        //     tags: [],
        // });
    };

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
                        onChange={(e) =>
                            setItemData({
                                ...itemData,
                                purchaseDate: e.target.value,
                            })
                        }
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
                        onChange={(e) =>
                            setItemData({
                                ...itemData,
                                bestBeforeDate: e.target.value,
                            })
                        }
                    />
                    <TextField
                        name='amount'
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
                    <TextField
                        className={classes.textField}
                        id='filled-select-category'
                        select
                        label='Kategorie'
                        value={category}
                        onChange={(e) => {
                            setItemData({
                                ...itemData,
                                category: e.target.value,
                            });
                            setCategory(e.target.value);
                        }}
                        variant='outlined'
                    >
                        {categories.map((category) => (
                            <MenuItem
                                key={category.value}
                                value={category.value}
                            >
                                {category.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        name='tags'
                        variant='outlined'
                        label='Tags'
                        value={itemData.tags}
                        onChange={(e) =>
                            setItemData({
                                ...itemData,
                                tags: e.target.value.split(','),
                            })
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
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default Form;
