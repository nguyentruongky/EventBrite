import React, {Component} from 'react';
import {Image, View} from 'react-native';

type Props = {
  placeholderColor?: string;
  width: any;
  height: any;
  resizeMode?: string;
  style?: {
    [key: string]: any;
  };
  uri: string;
};

type State = {
  loaded: boolean;
};

export default class AsyncImage extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {loaded: false};
  }

  render() {
    const {
      placeholderColor,
      resizeMode,
      style,
      width,
      height,
      uri,
    } = this.props;

    return (
      <View style={{width: width, height: height}}>
        <Image
          source={{uri: uri}}
          style={[
            style,
            {
              position: 'absolute',
              resizeMode: resizeMode ?? 'cover',
              width: width,
              height: height,
            },
          ]}
          onLoad={this._onLoad}
        />

        {!this.state.loaded && (
          <View
            style={[
              style,
              {
                backgroundColor: placeholderColor || '#90a4ae',
                position: 'absolute',
              },
            ]}
          />
        )}
      </View>
    );
  }

  _onLoad = () => {
    this.setState(() => ({loaded: true}));
  };
}
