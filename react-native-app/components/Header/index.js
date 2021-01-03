import React from 'react'; 
import {View, Image, TouchableOpacity} from 'react-native'; 

import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={() => console.warn (' Logo Clicked') }>
           <Image style={styles.logo} source ={require('../../assets/images/logo.png')} />
           </TouchableOpacity>              

           <TouchableOpacity onPress={() => console.warn ('Menu Clicked') }>  
            <Image style={styles.menu} source ={require('../../assets/images/menu.png')} />
            </TouchableOpacity>      
        </View>

    );
};

export default Header;