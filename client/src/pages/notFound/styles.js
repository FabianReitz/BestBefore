import { makeStyles } from '@material-ui/core/styles';
import desert from './assets/desert.svg';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${desert})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'fixed',
        padding: 0,
        margin: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    card: {
        marginTop: '1%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 362,
    },
    media: {
        height: 218,
        maxWidth: 362,
    },
}));
