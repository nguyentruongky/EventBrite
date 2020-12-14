import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default function ImageButton({
  icon,
  tintColor = null,
  height = 44,
  width = 44,
  onPress = null,
  style = null
}) {
  return (
    <TouchableOpacity
      style={{
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}
      onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{height: '50%', width: '50%', tintColor: tintColor}}
      />
    </TouchableOpacity>
  );
}
