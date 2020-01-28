import { makeStyles } from '@material-ui/core/Styles';


const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex'
    },
    transaksiSummary: {
        flex: '2 0 auto'
    },
    transaksiActions: {
        flexDirection: 'column'
    }
}))

export default useStyles;