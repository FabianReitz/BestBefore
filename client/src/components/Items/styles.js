import { TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        background: 'grey',
        maxWidth: '300px',
        //padding: '20px 20px 20px 20px',
    },
    wrapper: {
        display: 'grid',
        //'grid-template-columns': 'repeat(auto-fill, minmax(200px, 25%))',
        'grid-template-columns': 'repeat(4, 1fr)',
        'grid-auto-rows': 'minmax(100px, auto)',
        'grid-auto-flow': 'row',
        'grid-column-gap': '6px',
        'grid-row-gap': '6px',
    },
}));
