import React from 'react';
import {View, Text} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VectorButton from '@src/components/VectorButton';

export default function EventItem() {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 32,
        backgroundColor: 'white',
      }}>
      <AsyncImage
        height={100}
        width={100}
        style={{
          borderRadius: 16,
          marginLeft: 16,
        }}
        uri={
          'https://www.croatiaweek.com/wp-content/uploads/2019/12/101a2fe3-856c-46c3-a110-4e2bd1617ef9.jpg?x34489'
        }
      />
      <View style={{flex: 1, marginLeft: 32, marginRight: 8}}>
        <Text
          style={{
            ...getFont(Weight.bold, 16),
            color: 'black',
          }}>
          DIVA Royal - Queen Show San Francisco
        </Text>
        <Text
          style={{
            ...getFont(Weight.medium, 14),
            color: '#6e7386',
            marginTop: 8,
          }}>
          28 JUN • 07:00 PM GMT-7
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...getFont(Weight.regular, 14),
            color: '#6e7386',
            marginTop: 8,
            marginRight: 32,
          }}>
          The Cosmos Bar and Lounge
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: -30,
            marginBottom: 8,
          }}>
          <VectorButton
            Library={AntDesign}
            name="upload"
            size={24}
            color="#6e7386"
            style={{
              backgroundColor: 'white',
              width: 44,
              height: 44,
            }}
          />
          <VectorButton
            Library={AntDesign}
            name="hearto"
            size={24}
            color="#6e7386"
            style={{
              backgroundColor: 'white',
              width: 44,
              height: 44,
            }}
          />
        </View>
      </View>
    </View>
  );
}
