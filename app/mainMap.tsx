import React from 'react';
import MapView from 'react-native-maps';
import { Text, View, Button, StyleSheet, Pressable, Alert, TextInput } from 'react-native';
import {useRouter, Link} from 'expo-router';
import { styles } from '@/constants/Styles';
import * as Location from 'expo-location';
import { useState, useEffect, useRef } from 'react';

export default function MainMap () {
  const mapRef = useRef<MapView | null>(null);
  const [locationPermission, setLocationPermission] = useState(false);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
      } else {
        setLocationPermission(true);
      }
    })();
  }, []);
  const initialRegionKuopio = {
    latitude: 62.8924,       
    longitude: 27.6781,      
    latitudeDelta: 0.0922,   
    longitudeDelta: 0.0421,  
  };

    return (

     
      <View style = {styles.mapview}>
        {locationPermission && <MapView 
        style={styles.map}
        initialRegion={initialRegionKuopio}
        showsUserLocation = {true}
        showsMyLocationButton = {true} //TODO why not showing?
        followsUserLocation = {true}
        ref={mapRef}
            
        />}
        <TextInput
        style={{
          position: "absolute",
          margin: 10,
          borderRadius: 20,
          backgroundColor: "yellow",
          borderWidth:1,
          borderColor: "black",
          width: "90%",
          height: 45,
          alignSelf: "center",
        }}
        placeholder='Where from'
        />
        <TextInput
        style={{
          position: "absolute",
          margin: 10,
          borderRadius: 20,
          backgroundColor: "yellow",
          borderWidth:1,
          borderColor: "black",
          width: "90%",
          height: 45,
          alignSelf: "center",
        }}
        placeholder='Where to'
        />

   
          
          </View>
      );
    }
    
    