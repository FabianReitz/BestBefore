import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        maxWidth: '30%',
        minWidth: '280px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    category: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
