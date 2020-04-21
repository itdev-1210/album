import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('http://shubhamchitransh8.000webhostapp.com/AceOptical/data.json')
     .then(response => this.setState({ albums: response.data }));
}

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.name} album={album} />
    );
  }

 render() {
   return (
    <ScrollView>
      {this.renderAlbums()}
    </ScrollView>
   );
  }
}

export default AlbumList;
