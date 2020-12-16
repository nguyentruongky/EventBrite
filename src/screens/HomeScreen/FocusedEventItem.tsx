import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VectorButton from '@src/components/VectorButton';
import {dropShadow} from '@src/assets/shadow';
import {Event} from '@src/models/Event';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import EventDetailScreen from '../EventDetailScreen/EventDetailScreen';

const red = '#ff563f';
const screenSize = Dimensions.get('window');
const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export default function FocusEventItem({event, navigation}) {
  const data = event as Event;
  const startMon = months[data?.startDate?.getMonth()];
  const startDay = data?.startDate?.getDate();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push('EventDetailScreen', event)}>
      <View style={{marginBottom: 32}}>
        <View>
          <AsyncImage
            height={160}
            width={screenSize.width - 32}
            style={{
              borderRadius: 16,
              marginLeft: 16,
            }}
            uri={data?.images[0].url}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: -40,
              marginRight: 40,
              marginBottom: 8,
            }}>
            <VectorButton
              Library={AntDesign}
              name="upload"
              size={24}
              color="#6e7386"
              style={{
                backgroundColor: 'white',
                width: 66,
                height: 66,
                borderRadius: 36,
                marginRight: 16,
                ...dropShadow(),
              }}
            />
            <VectorButton
              Library={AntDesign}
              name="hearto"
              size={24}
              color="#6e7386"
              style={{
                backgroundColor: 'white',
                width: 66,
                height: 66,
                borderRadius: 36,
                ...dropShadow(),
              }}
            />
          </View>
        </View>

        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 16,
              marginLeft: 24,
            }}>
            <View style={{width: 54, alignItems: 'center'}}>
              <Text
                style={{
                  ...getFont(Weight.bold, 16),
                  color: red,
                  marginTop: 4,
                }}>
                {startMon}
              </Text>
              <Text
                style={{
                  ...getFont(Weight.bold, 20),
                  color: 'black',
                  marginTop: 8,
                }}>
                {startDay}
              </Text>
            </View>
            <View style={{marginHorizontal: 16}}>
              <Text
                numberOfLines={2}
                style={{
                  ...getFont(Weight.bold, 20),
                  color: 'black',
                  marginRight: 32,
                }}>
                {data?.name}
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  ...getFont(Weight.regular, 16),
                  color: '#6e7386',
                  marginTop: 8,
                  marginRight: 54,
                  textTransform: 'capitalize',
                }}>
                {data?.venue.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
