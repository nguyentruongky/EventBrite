import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function IconButton({icon, onPress = null, style = null}) {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
}
