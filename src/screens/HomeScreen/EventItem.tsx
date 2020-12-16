import React from 'react';
import {View, Text} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VectorButton from '@src/components/VectorButton';
import {Event} from '@src/models/Event';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function EventItem({event, navigation}) {
  const data = event as Event;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push('EventDetailScreen', {data: event})}
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
        uri={data?.images[0].url}
      />
      <View style={{flex: 1, marginLeft: 32, marginRight: 8}}>
        <Text
          style={{
            ...getFont(Weight.bold, 16),
            color: 'black',
          }}>
          {data?.name}
        </Text>
        <Text
          style={{
            ...getFont(Weight.medium, 14),
            color: '#6e7386',
            marginTop: 8,
          }}>
          {data?.startDate.toLocaleTimeString('en-us', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...getFont(Weight.regular, 14),
            color: '#6e7386',
            marginTop: 8,
            marginRight: 32,
          }}>
          {data?.venue.name}
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
    </TouchableWithoutFeedback>
  );
}
