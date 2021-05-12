import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    inputField: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },

    menuButton: {
        marginRight: '20px',
    },

    title: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2, 4, 3),
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        textAlign: 'center',
    },
}));
