import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createItem } from "../../actions/items";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Form = () => {
  const today = new Date();
  const todayPretty = today.toISOString().split("T")[0];

  const nextWeekUgly = today.setDate(today.getDate() + 7);
  const nextWeek = new Date(nextWeekUgly);
  const nextWeekPretty = nextWeek.toISOString().split("T")[0];

  const [itemData, setItemData] = useState({
    title: "",
    manufacturer: "",
    purchaseDate: "",
    bestBeforeDate: "",
    ammount: "",
    isPackaged: false,
    tags: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createItem(itemData));
  };

  const clear = () => {};

  return (
    <Accordion className={classes.paper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Ein Produkt hinzufügen
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <TextField
            name="title"
            variant="outlined"
            label="Titel"
            fullWidth
            value={itemData.title}
            onChange={(e) =>
              setItemData({ ...itemData, title: e.target.value })
            }
          />

          <TextField
            name="manufacturer"
            variant="outlined"
            label="Hersteller"
            fullWidth
            value={itemData.manufacturer}
            onChange={(e) =>
              setItemData({ ...itemData, manufacturer: e.target.value })
            }
          />
          <form noValidate>
            <TextField
              variant="outlined"
              fullWidth
              id="buydate"
              label="Kaufdatum"
              type="date"
              defaultValue="2021-05-11"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <form noValidate>
            <TextField
              variant="outlined"
              fullWidth
              id="bestBeforeDate"
              label="Mindesthaltbarkeitsdatum"
              type="date"
              defaultValue="2021-05-11"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <TextField
            name="ammount"
            variant="outlined"
            label="Menge"
            fullWidth
            value={itemData.ammount}
            onChange={(e) =>
              setItemData({ ...itemData, ammount: e.target.value })
            }
          />

          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
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
            fullWidth
          >
            HINZUFÜGEN
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            CLEAR
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default Form;
