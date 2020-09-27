import React, {Component} from 'react';
import {Platform, SyleSheet, Text, View} from 'react-native';
//import MapView from 'react-native-maps';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from "expo-task-manager";

/*
function SentinelDDCalc(latP,lonP,latR,lonR,radioM){
	/*constructor(props){//objeto para la latitud y longitud de coordenadas
		super(props);
		
		this.state = {
			latitude: 0;
			longitude: 0;
		}
	}
	
	componentDidMount(){//ubicación actual
		this.watchId = navigator.geolocation.watchPosition{
			(positio) => {
				this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				)};
			},
			(error) => {
				this.setState({ error: error.message })
			},
			{ enableHighAccuracy: false, timeout: 1, maximumAge: 1, distanceFilter: 1}
		}
	}
	
	var lat1 = latP;
	var lon1 = lonP;

	var lat2 = latR;
	var lon2 = lonR;

	var R = 6371e3; // radio de la tierra en metros
	var fi1 = lat1 * Math.PI/180; // cambio de valores (fi, lambda) en radianes
	var fi2 = lat2 * Math.PI/180;
	var Dfi = (lat2-lat1) * Math.PI/180;
	var Dlam = (lon2-lon1) * Math.PI/180;

	var a = Math.sin(Dfi/2) * Math.sin(Dfi/2) +
			  Math.cos(fi1) * Math.cos(fi2) *
			  Math.sin(Dlam/2) * Math.sin(Dlam/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c; // en metros
	
	//si la distancia entre las coordenadas es mayor o igual a radioM se manda la alerta
	if(d>=radioM){
		SendNotification(expoPushToken,"Paciente fuera de area"," ",'default','high');
		return d;
	}
	else
		return d;
}*/
export class ubicacionPaciente {
	constructor(longitude,latitude){
		this.longitude = longitude;
		this.latitude = latitude;
	}
}

//const ubiP = new ubicacionPaciente(-9.400,-9.400);

export class puntoSeguro{
	constructor(longitude,latitude,distance){
		this.longitude = longitude;
		this.latitude = latitude;
		this.distance = distance;
	}
}

//const ubiS = new puntoSeguro(-9.400,-9.400,500);

export function DistanciaCoordenadas(puntoSeguro, ubicacionPaciente){
	var lat1 = ubicacionPaciente.latitude;
	//console.log(lat1);
	var lon1 = ubicacionPaciente.longitude;
	//console.log(lon1);

	var lat2 = puntoSeguro.latitude;
	//console.log(lat2);
	var lon2 = puntoSeguro.longitude;
	//console.log(lon2);

	var R = 6371e3; // radio de la tierra en metros
	var fi1 = lat1 * Math.PI/180; // cambio de valores (fi, lambda) en radianes
	var fi2 = lat2 * Math.PI/180;
	var Dfi = (lat2-lat1) * Math.PI/180;
	var Dlam = (lon2-lon1) * Math.PI/180;

	var a = Math.sin(Dfi/2) * Math.sin(Dfi/2) +
			  Math.cos(fi1) * Math.cos(fi2) *
			  Math.sin(Dlam/2) * Math.sin(Dlam/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c; // en metros
	
	//console.log(d);
	
	if(d>=puntoSeguro.distance){
		//SendNotification(expoPushToken,"Paciente fuera de area"," ",'default','high');
		return d;
	}
	else
		return d;
}

//creacion de tarea de fondo
const distcoords = "BACKGROUND_TASK";

TaskManager.defineTask(distcoords, () => {
  try {
    // data de extracción aquí...
    const receivedNewData = DistanciaCoordenadas(puntoSeguro, ubicacionPaciente)
	console.log("My task ", receivedNewData)
    return receivedNewData
      ? BackgroundFetch.Result.NewData
      : BackgroundFetch.Result.NoData
  } catch (err) {
    return BackgroundFetch.Result.Failed
  }
})

RegisterBackgroundTask = async () => {
  try {
    await BackgroundFetch.istcoorregisterTaskAsync(dds, {
      minimumInterval: 10, // segundos,
    })
    console.log("Task registered")
  } catch (err) {
    console.log("Task Register failed:", err)
  }
}
