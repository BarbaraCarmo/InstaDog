import React from 'react';
import { Text, Image, View, FlatList } from 'react-native'
import estilos from './estilos';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilosGlobal, { cores } from '../../estilosGlobal';

function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    }else{
      return Promise.reject(new Error(response.statusText));
    }
  }




export default function Posts({ username, icone, postagem }) {
    return <>
        <View style={estilos.flexArea}>
            <Image style={estilos.userPhoto} source={require("../../../assets/dog2.jpg")} />
            <Text style={estilos.userName}>{username}</Text>
        </View>
        <Image style={estilos.postagem} source={{uri: postagem}} />
        <View style={estilos.flexArea}>
            <Icon name="heart-o" style={estilos.icones} />
            <Icon name="comment-o" style={estilos.icones} />
            <Icon name="send-o" style={estilos.icones} />
            <View style={{ alignItems: "flex-end", flex: 0.7 }}>
                <Icon name="bookmark-o" style={estilos.saveIcon} />
            </View>
        </View>
        <Text style={estilos.nameCaption}>
            {username}
            <Text style={{fontWeight: "normal"}}> eis aqui um doquinho super fofo</Text>
        </Text>
    </>
}