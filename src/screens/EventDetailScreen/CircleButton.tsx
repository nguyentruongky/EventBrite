import React from 'react';
import VectorButton from '@src/components/VectorButton';
import {dropShadow} from '@src/assets/shadow';

export default function CircleButton({Library, name, onPress}) {
  return (
    <VectorButton
      Library={Library}
      name={name}
      size={16}
      color="black"
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        width: 44,
        height: 44,
        borderRadius: 36,
        ...dropShadow(),
      }}
    />
  );
}
