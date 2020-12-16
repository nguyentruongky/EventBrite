import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import TextButton from '@src/components/TextButton';
import Body from './EventBodyView';
import CircleButton from './CircleButton';
import {ActionSheetIOS} from 'react-native';
import {Event} from '@src/models/Event';

const screenSize = Dimensions.get('window');
export default function EventDetailScreen({route, navigation}) {
  const [event, setEvent] = useState(null);
  console.log('Event: ', event);
  useEffect(() => {
    const _event = route.params as Event;
    setEvent(_event);
  }, []);

  function onMenuPress() {
    const options = [
      'Share this event',
      'Add to Calendar',
      'Contact Organizer',
      'Report event',
      'Cancel',
    ];
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options,
        destructiveButtonIndex: 2,
        cancelButtonIndex: 4,
      },
      (buttonIndex) => {
        console.log(`Button ${options[buttonIndex]} was pressed`);
      },
    );
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        {Header(event)}
        {Body(event)}
      </ScrollView>

      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 16,
          position: 'absolute',
        }}>
        <CircleButton Library={Ionicons} name="arrow-back" />

        <View style={{flex: 1}} />
        <View style={{flexDirection: 'row'}}>
          <CircleButton Library={AntDesign} name="upload" />
          <View style={{width: 16}} />
          <CircleButton
            Library={Entypo}
            name="dots-three-vertical"
            onPress={onMenuPress}
          />
        </View>
      </SafeAreaView>

      <Footer />
    </View>
  );
}

function Header(event: Event) {
  return (
    <View style={{height: 400, justifyContent: 'flex-end'}}>
      <View style={{position: 'absolute'}}>
        <AsyncImage
          height={400}
          width={screenSize.width}
          uri={event?.images[0].url}
        />
      </View>

      <View
        style={{
          backgroundColor: '#696b67aa',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...getFont(Weight.semiBold, 20),
            color: 'white',
            marginVertical: 16,
            marginLeft: 16,
          }}>
          Sold Out
        </Text>
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: '#7b7b7b', height: 0.5}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              ...getFont(Weight.semiBold, 15),
              color: '#393939',
              marginLeft: 16,
              marginTop: 16,
            }}>
            Free
          </Text>
          <Text
            style={{
              ...getFont(Weight.regular, 15),
              color: '#7b7b7b',
              marginLeft: 16,
              marginTop: 8,
              marginBottom: 16,
            }}>
            on Eventbrite
          </Text>
        </View>
        <TextButton
          title="Grab it"
          style={{
            width: 150,
            height: 44,
            borderWidth: 0.5,
            borderRadius: 8,
            borderColor: '#7b7b7b',
            marginRight: 16,
          }}
          textStyle={{
            ...getFont(Weight.semiBold, 18),
            color: 'black',
            textAlign: 'left',
          }}
          onPress={{}}
        />
      </View>
    </View>
  );
}
