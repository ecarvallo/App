import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";

export default function Location( { navigation } ) {
    return (
        <View style={styles.formContainer}>
            <Button
                title="Ubicacion Actual"
                containerStyle={styles.btnContainer}
                onPress={() => {navigation.navigate('currentLocation')}}
            />
            <Button
                title="Historial de ubicaciones"
                containerStyle={styles.btnContainer}
                onPress={() => {navigation.navigate('histLocation')}}
            />
            <Button
                title="Determinar área segura"
                containerStyle={styles.btnContainer}
                onPress={() => {navigation.navigate('safeArea')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    btnContainer: {
      marginTop: 20,
      width: "80%",
    }
  });