import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { Button, Slider } from 'react-native-elements';
import MapView from 'react-native-maps';
import * as Location from "expo-location";
import Loading from '../../components/Loading';

export default function SafeArea() {
    const [value, setValue] = useState(500)
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      (async () => {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
        }
        await Location.watchPositionAsync({accuracy: Location.Accuracy.BestForNavigation,distanceInterval: 10, },
          (loc) => { setLocation({latitude: loc.coords.latitude, longitude: loc.coords.longitude, latitudeDelta: 0.007, longitudeDelta: 0.007 }) }
          );
      })();
    }, []);

    return (
        <View style={styles.container}> 
            {location ? 
                <MapView 
                    style={styles.mapContainer}
                    initialRegion={location}
                />
                : <Loading isVisible={true} text="Cargando"/> 
            }
            <Slider
                style= {styles.sliderBar}
                value = {value}
                onValueChange = {(value) => {setValue(value)} }
                maximumValue={1000}
                minimumValue={0}
                thumbStyle={{height: 20, width: 5, backgroundColor:'transparent'}}
                thumbProps={{
                    Component: Animated.Image,
                    source: {
                      uri: 'https://firebasestorage.googleapis.com/v0/b/alzhistant-test.appspot.com/o/Black.jpg?alt=media&token=2046e716-0bc6-4e62-a969-cc362af26f02',
                    },
                  }}
            />
            <Text style={styles.txtCoord}>{`${Math.round(value)} metros`}</Text>
            <Button
                title="Determinar área segura"
                containerStyle={styles.btnContainer}
                onPress={() => {console.log(Math.trunc(value))}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    sliderBar: {
        width: "80%",
        height: 40,
    },
    mapContainer: {
        marginTop: 30,
        width: '100%',
        height: '70%'
    },
    txtCoord: {
        marginBottom: 10
    }
  });