import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { fetchArtworks } from '../actions/index'
// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));


export class ArtworkList extends Component {
    

    componentDidMount() {
        this.props.fetchArtworks();
    }

    render() {
        const styles = useStyles();
        const artworks = this.props.artworks.map(( artwork, i ) => ({artwork}))
        return (
            <div className={styles.root}>
            <ImageList rowHeight={160} className={styles.imageList} cols={3}>
                {artworks.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1}>
                    <img src={item.img} alt={item.title} />
                </ImageListItem>
                ))}
            </ImageList>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      artworks: state.artworks
    }
}

export default connect(mapStateToProps, { fetchArtworks })(ArtworkList)
