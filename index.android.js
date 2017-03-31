import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  StatusBar
} from 'react-native';
import Welcome from './src/components/Welcome/Welcome';
import Login from './src/components/login';
import Register from './src/components/register';
import Discovery from './src/components/discovery';
import MyFeed from './src/components/myfeed';
import MyProfile from './src/components/myprofile';
import EditProfile from './src/components/editprofile';

export default class bookSaying extends Component {
    renderScene(route, navigator){

		var routeId = route.id;

		if(routeId === 'Login'){
			return <Login navigator={navigator}/>;
		}
		if(routeId === 'Register'){
			return <Register navigator={navigator}/>;
		}
		if(routeId === 'Welcome'){
			return <Welcome navigator={navigator}/>;
		}
        if(routeId === 'MyFeed'){
			return <MyFeed navigator={navigator}/>;
        }
        if(routeId === 'Discovery'){
			return <Discovery navigator={navigator}/>;
		}
        if(routeId === 'MyProfile'){
			return <MyProfile navigator={navigator}/>;
		}
        if(routeId === 'EditProfile'){
			return <EditProfile navigator={navigator}/>;
		}
	}

	render(){
		return(
			<Navigator
				initialRoute={{
					id: 'EditProfile'
				}}
				renderScene={
					this.renderScene.bind(this)
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
  },
  welcome: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
  },
  instructions: {
	textAlign: 'center',
	color: '#333333',
	marginBottom: 5,
  },
});

AppRegistry.registerComponent('bookSaying', () => bookSaying);
