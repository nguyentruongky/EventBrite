import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import IconButton from '@src/components/IconButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const red = '#ff563f';
const screenSize = Dimensions.get('window');

export default function FocusEventItem() {
  return (
    <View>
      <View>
        <AsyncImage
          height={160}
          width={screenSize.width - 32}
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
            marginTop: -40,
            marginRight: 40,
            marginBottom: 8,
          }}>
          <IconButton
            icon={<AntDesign name="upload" size={24} color={'#6e7386'} />}
            style={{
              backgroundColor: 'white',
              width: 66,
              height: 66,
              borderRadius: 36,
              shadowColor: '#000',
              marginRight: 16,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          />
          <IconButton
            icon={<AntDesign name="hearto" size={24} color={'#6e7386'} />}
            style={{
              backgroundColor: 'white',
              width: 66,
              height: 66,
              borderRadius: 36,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
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
              style={{
                ...getFont(Weight.bold, 20),
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
