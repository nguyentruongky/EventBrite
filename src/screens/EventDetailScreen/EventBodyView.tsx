import React from 'react';
import {View, Text, Dimensions, Linking, Platform} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TextButton from '@src/components/TextButton';
import CircleButton from './CircleButton';
import SimilarEventsView from './SimilarEventsView';
import {Event, Venue} from '@src/models/Event';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';

export default function Body(event: Event) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {TitleView(event)}
      {TimeView(event)}
      {LocationView(event)}
      {AboutView(event)}
      {MapDetailView(event)}
      {HostView(event)}
      <SimilarEventsView />
      <View style={{height: 32}} />
    </View>
  );
}

function TitleView(event: Event) {
  return (
    <View style={{marginTop: 32}}>
      <Text
        style={{
          ...getFont(Weight.bold, 30),
          color: 'black',
          marginBottom: 8,
          marginLeft: 16,
        }}>
        {event?.name}
      </Text>
      <Text
        style={{
          ...getFont(Weight.semiBold, 15),
          color: '#395de0',
          marginLeft: 16,
        }}>
        by {event?.hostName}
      </Text>
    </View>
  );
}

function TimeView(event: Event) {
  return (
    <View style={{marginTop: 32, marginHorizontal: 16, flexDirection: 'row'}}>
      <SimpleLineIcons name="calendar" size={24} color="gray" />
      <View style={{marginHorizontal: 16}}>
        <Text
          style={{
            ...getFont(Weight.semiBold, 15),
            color: '#393939',
          }}>
          {event?.startDate?.toLocaleDateString('en-us', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Text>
        <Text
          style={{
            ...getFont(Weight.regular, 15),
            marginVertical: 12,
            color: '#7b7b7b',
          }}>
          {event?.startDate?.toLocaleTimeString('en-us', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <TextButton
          title="Add to Calendar"
          style={{alignItems: 'flex-start'}}
          textStyle={{
            ...getFont(Weight.semiBold, 15),
            color: '#395de0',
            textAlign: 'left',
          }}
          onPress={{}}
        />
      </View>
    </View>
  );
}

function LocationView(event: Event) {
  return (
    <View style={{marginTop: 32, marginHorizontal: 16, flexDirection: 'row'}}>
      <SimpleLineIcons name="location-pin" size={24} color="gray" />
      <View style={{marginHorizontal: 16}}>
        <Text
          style={{
            ...getFont(Weight.semiBold, 15),
            color: '#393939',
          }}>
          {event?.venue?.name}
        </Text>
        <Text
          style={{
            ...getFont(Weight.regular, 15),
            marginVertical: 12,
            color: '#7b7b7b',
          }}>
          {event?.venue?.address}
        </Text>
      </View>
    </View>
  );
}

function AboutView(event: Event) {
  return (
    <View style={{marginHorizontal: 16, marginTop: 32}}>
      <Text
        style={{
          ...getFont(Weight.bold, 20),
          color: 'black',
        }}>
        About
      </Text>
      <Text
        style={{
          ...getFont(Weight.regular, 15),
          color: '#555555',
          marginTop: 16,
        }}>
        {event?.info}
      </Text>

      <TextButton
        title="Read more"
        style={{alignItems: 'flex-start', marginTop: 8}}
        textStyle={{
          ...getFont(Weight.semiBold, 15),
          color: '#395de0',
          textAlign: 'left',
        }}
        onPress={{}}
      />
    </View>
  );
}

function MapDetailView(event: Event) {
  const lat: number = event?.venue?.lat ?? 37.78825;
  const long: number = event?.venue?.long ?? -122.4324;
  function openMap(transportType: string) {
    if (Platform.OS == 'ios') {
      Linking.openURL(
        `maps://app?daddr=${lat}+${long}&dirflg=${transportType}`,
      );
    }
  }
  return (
    <View style={{marginVertical: 32}}>
      <Text
        style={{
          ...getFont(Weight.bold, 20),
          color: 'black',
          marginHorizontal: 16,
        }}>
        Location
      </Text>
      <View
        style={{
          backgroundColor: 'blue',
          height: 150,
          marginVertical: 16,
        }}>
        <MapView
          style={{...StyleSheet.absoluteFillObject}}
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: lat,
              longitude: long,
            }}
          />
        </MapView>
        <View style={{flex: 1}} />
      </View>
      <View
        style={{
          marginHorizontal: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...getFont(Weight.semiBold, 15),
            color: '#393939',
          }}>
          {event?.venue?.name}
        </Text>
        <Text
          style={{
            ...getFont(Weight.regular, 15),
            marginVertical: 12,
            color: '#7b7b7b',
          }}>
          {event?.venue?.address}
        </Text>

        <View style={{flexDirection: 'row', marginTop: 16}}>
          <CircleButton
            Library={Fontisto}
            name="car"
            onPress={() => openMap('d')}
          />
          <View style={{width: 16}} />
          <CircleButton
            Library={Ionicons}
            name="walk"
            onPress={() => openMap('w')}
          />
          <View style={{width: 16}} />
          <CircleButton
            Library={Ionicons}
            name="ios-bus-outline"
            onPress={() => openMap('r')}
          />
        </View>
      </View>
    </View>
  );
}

function HostView(event: Event) {
  return (
    <View
      style={{
        paddingTop: 32,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AsyncImage
        style={{borderRadius: 50}}
        height={100}
        width={100}
        uri={event?.venue?.imageUrl}
      />
      <Text
        style={{
          ...getFont(Weight.bold, 25),
          marginVertical: 12,
          color: 'black',
        }}>
        {event?.hostName}
      </Text>
      <Text
        style={{
          ...getFont(Weight.semiBold, 15),
          color: 'black',
        }}>
        Organizer
      </Text>
      <TextButton
        title="Follow"
        style={{
          width: 150,
          height: 44,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#7b7b7b',
          marginVertical: 32,
          backgroundColor: 'white',
        }}
        textStyle={{
          ...getFont(Weight.semiBold, 18),
          color: 'black',
          textAlign: 'left',
        }}
        onPress={{}}
      />
    </View>
  );
}
