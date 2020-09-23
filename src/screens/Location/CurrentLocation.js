import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Loading from '../../components/Loading';

export default function currentLocation() {
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      (async () => {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
        }
        await Location.watchPositionAsync({accuracy: Location.Accuracy.BestForNavigation,distanceInterval: 10, },
          (loc) => { setLocation({latitude: loc.coords.latitude, longitude: loc.coords.longitude, latitudeDelta: 0.005, longitudeDelta: 0.005 }) }
          );
      })();
    }, []);

    return (
      <View style={styles.container}>
            {location ? 
                <MapView 
                    style={styles.mapStyle}
                    initialRegion={location}
                    showsUserLocation={true}
                />    
                : <Loading isVisible={true} text="Cargando"/> 
            }
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    mapStyle: {
      width: '100%',
      height: '100%',
    },
  });