import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VectorButton from '@src/components/VectorButton';
import {ScrollView} from 'react-native-gesture-handler';

const screenSize = Dimensions.get('window');
const red = '#ff563f';

export default function SimilarEventsView() {
  return (
    <View>
      <Text
        style={{
          ...getFont(Weight.bold, 20),
          color: 'black',
          marginLeft: 16,
          marginTop: 32,
          marginBottom: 24,
        }}>
        More events like this
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </ScrollView>
    </View>
  );
}

function EventItem() {
  return (
    <View style={{marginRight: 24}}>
      <View style={{width: screenSize.width * 0.7}}>
        <AsyncImage
          height={160}
          width="100%"
          style={{
            borderRadius: 16,
            marginLeft: 16,
          }}
          uri={
            'https://www.croatiaweek.com/wp-content/uploads/2019/12/101a2fe3-856c-46c3-a110-4e2bd1617ef9.jpg?x34489'
          }
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: -24,
            marginRight: 10,
            marginBottom: 8,
          }}>
          <VectorButton
            Library={AntDesign}
            name="upload"
            size={16}
            color="#6e7386"
            style={{
              backgroundColor: 'white',
              width: 44,
              height: 44,
              borderRadius: 36,
              borderWidth: 0.5,
              borderColor: 'gray',
              marginRight: 16,
            }}
          />
          <VectorButton
            Library={AntDesign}
            name="hearto"
            size={16}
            color="#6e7386"
            style={{
              backgroundColor: 'white',
              width: 44,
              height: 44,
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 36,
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
              }}>
              JUN
            </Text>
            <Text
              style={{
                ...getFont(Weight.bold, 20),
                color: 'black',
                marginTop: 8,
              }}>
              26
            </Text>
          </View>
          <View style={{marginLeft: 16}}>
            <Text
              numberOfLines={2}
              style={{
                ...getFont(Weight.medium, 20),
                color: 'black',
              }}>
              PRIDE At the Disco
            </Text>
            <Text
              style={{
                ...getFont(Weight.regular, 16),
                color: '#6e7386',
                marginTop: 8,
              }}>
              WestField San Francisco Disco
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
