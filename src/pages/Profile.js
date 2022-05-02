import React,{useState} from 'react';
import {StyleSheet ,View,Dimensions,Text,ScrollView,SafeAreaView,Alert} from "react-native";
import {Avatar,Button,TextInput} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";;
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
const screenSize = Dimensions.get('window');

const Profile = () => {
  const [password_key, setPassword_key] = useState(true);
  const [password, setPassword] = useState('');
  const [name_key, setName_key] = useState(true);
  const [name, setName] = useState('');
  const [number_key, setNumber_key] = useState(true);
  const [number, setNumber] = useState('');
  const [email_key, setEmail_key] = useState(true);
  const [email, setEmail] = useState('');

  const add = () =>
  Alert.alert(
    "Good Bayastan",
    "Озгорду",
    [
      
      {
        text: "Отмена",
        onPress: () => console.log("Cancel Pressed"),
        style: "Отмена"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.haeder} >
                <View>
                    <View style={styles.avatar}>
                        <View>
                         <Avatar.Image
                            style={styles.avatar_img}
                            size={screenSize.width * 0.4}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Amu2GKezbMJO2iv0_loFw-eIHGVkyV8lbQ&usqp=CAU',
                              }}/>
                              <View 
                                style={styles.icon_camera}
                                >
                                <Ionicons
                                name='camera'
                                color={"white"} 
                                size={30}
                                on/>
                              </View>
                        </View>
                       
                        <View style={{alignItems: 'center', marginVertical: 20}}>
                            <Text style={styles.text1}>{name}</Text>
                            <Text style={styles.text2}>{number}</Text>
                        </View>
                    </View>
                 <View style={{margin:20,justifyContent:'space-between'}}>
                    <View style={styles.textinput}>
                         <Ionicons
                              style={styles.icons1}
                              name='person'
                              color={"white"} 
                              size={30}/>
                                     <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    activeOutlineColor='yellow'
                                    outlineColor="red"
                                    disabled={name_key}
                                    dense={true}
                                    placeholder="name"
                                    onChangeText={l => setName(l)}
                                    value={name}
                                    />
                              {name_key ? (
                                         <Ionicons 
                                         style={styles.pencil}
                                         name='pencil' 
                                         color={'#0aad74'} 
                                         size={27} 
                                         onPress={() => setName_key(false)}/>
                                    ):(
                                        <Entypo 
                                        style={styles.pencil}
                                        name='check' 
                                        color={'#0aad74'} 
                                        size={27} 
                                        onPress={() => setName_key(true)}/>
                                    )}
                    </View>
                    <View style={styles.textinput}>
                    <FontAwesome
                              style={styles.icons2}
                              name='phone'
                              color={"white"} 
                              size={30}  />
                                    <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    activeOutlineColor='green'
                                    outlineColor="red"
                                    disabled={number_key}
                                    dense={true}
                                    placeholder="number"
                                    value={number}
                                    onChangeText={l => setNumber(l)}
                                    />
                              {number_key ? (
                                         <Ionicons 
                                         style={styles.pencil}
                                         name='pencil' 
                                         color={'#0aad74'} 
                                         size={27} 
                                         onPress={() => setNumber_key(false)}/>
                                    ):(
                                        <Entypo 
                                        style={styles.pencil}
                                        name='check' 
                                        color={'#0aad74'} 
                                        size={27} 
                                        onPress={() => setNumber_key(true)}/>
                                    )}
                    </View>
                    <View style={styles.textinput}>
                         <Fontisto
                              style={styles.icons3}
                              name='email'
                              color={"white"} 
                              size={27}  />
                               <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    activeOutlineColor='green'
                                    outlineColor="red"
                                    disabled={email_key}
                                    dense={true}
                                    placeholder="email"
                                    value={email}
                                    onChangeText={l => setEmail(l)}
                                    />
                             {email_key ? (
                                         <Ionicons 
                                         style={styles.pencil}
                                         name='pencil' 
                                         color={'#0aad74'} 
                                         size={27} 
                                         onPress={() => setEmail_key(false)}/>
                                    ):(
                                        <Entypo 
                                        style={styles.pencil}
                                        name='check' 
                                        color={'#0aad74'} 
                                        size={27} 
                                        onPress={() => setEmail_key(true)}/>
                                    )}
                    </View>
                    <View style={styles.textinput}>
                             <FontAwesome
                              style={styles.icons4}
                              name='lock'
                              color={"white"} 
                              size={30}  />
                                   <TextInput
                                    style={styles.input}
                                    secureTextEntry
                                    mode='outlined'
                                    activeOutlineColor='green'
                                    outlineColor="red"
                                    disabled={password_key}
                                    dense={true}
                                    placeholder="password"
                                    value={password}
                                    onChangeText={l => setPassword(l)}
                                    right={<TextInput.Icon name="eye" />}
                                    />
                                    {password_key ? (
                                         <Ionicons 
                                         style={styles.pencil}
                                         name='pencil' 
                                         color={'#0aad74'} 
                                         size={27} 
                                         onPress={() => setPassword_key(false)}/>
                                    ):(
                                        <Entypo 
                                        style={styles.pencil}
                                        name='check' 
                                        color={'#0aad74'} 
                                        size={27} 
                                        onPress={() => setPassword_key(true)}/>
                                    )}
                            
                    </View>
                  </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <Button  
                    style={styles.button}
                    onPress={() => save()}
                    >
                    Сохранить      
                    </Button>
                </View>
                  
            </View>
         </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    haeder:{
        padding: 8,
        justifyContent:'space-between'
    },
    button:{
        width:300,
        marginLeft:10,
        marginTop:60,
        backgroundColor:'#fff700',
        color:'black',
    },
    pencil:{
        marginTop:20
    },
    input:{
        width:300,
        marginTop:10,
        marginLeft:25
    },
    textinput:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    avatar:{
        alignItems: 'center', 
        marginVertical: 20
    },
    text1:{
        color:'#999999',
        fontWeight:'bold',
        fontSize:20
    },
    text2:{
        color:'#999999',
        fontWeight:'bold',
        fontSize:18
    },
    icons1:{
        marginRight:-20,
        marginTop:20
    },icons2:{
        marginRight:-20,
        marginTop:20,
        marginLeft:5
    },icons3:{
        marginRight:-20,
        marginTop:20,
        marginLeft:3
    },icons4:{
        marginRight:-20,
        marginTop:20,
        marginLeft:10
    },
    icon_camera:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor:'green',
        marginLeft:100,
        marginTop:125
    },
    avatar_img:{
        position:'relative'
    }
  });
export default Profile;
