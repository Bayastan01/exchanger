import React,{useState} from 'react';
import {StyleSheet ,View,Dimensions,Text,ScrollView,SafeAreaView,Alert} from "react-native";
import {Avatar,Button,TextInput} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
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
  const [pass, setPass] = useState(true)

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
                <View>
                    <View style={styles.avatar}>
                        <View>
                         <Avatar.Image
                            style={styles.avatar_img}
                            size={screenSize.width * 0.4}
                            source={{
                                uri: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg',
                              }}/>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.text1}>{name}</Text>
                            <Text style={styles.text2}>{number}</Text>
                        </View>
                    </View>
                 <View>
                    <View style={styles.textinput}>
                         <Ionicons
                              style={styles.icons1}
                              name='person'
                              color={"white"}
                              size={30}/>
                                     <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    activeOutlineColor='green'
                                    outlineColor="#3f51b5"
                                    disabled={name_key}
                                    dense={true}
                                    placeholder="Ф.И.О"
                                    onChangeText={l => setName(l)}
                                    value={name}
                                    />
                              {name_key ? (
                                         <Ionicons
                                         style={styles.pencil}
                                         name='pencil'
                                         color={'#3f51b5'}
                                         size={27}
                                         onPress={() => setName_key(false)}/>
                                    ):(
                                        <Entypo
                                        style={styles.pencil}
                                        name='check'
                                        color={'green'}
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
                                    outlineColor="#3f51b5"
                                    disabled={number_key}
                                    dense={true}
                                    placeholder="Номер"
                                    value={number}
                                    onChangeText={l => setNumber(l)}
                                    />
                              {number_key ? (
                                         <Ionicons
                                         style={styles.pencil}
                                         name='pencil'
                                         color={'#3f51b5'}
                                         size={27}
                                         onPress={() => setNumber_key(false)}/>
                                    ):(
                                        <Entypo
                                        style={styles.pencil}
                                        name='check'
                                        color={'green'}
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
                                    outlineColor="#3f51b5"
                                    disabled={email_key}
                                    dense={true}
                                    placeholder="Электронная почта"
                                    value={email}
                                    onChangeText={l => setEmail(l)}
                                    />
                             {email_key ? (
                                         <Ionicons
                                         style={styles.pencil}
                                         name='pencil'
                                         color={'#3f51b5'}
                                         size={27}
                                         onPress={() => setEmail_key(false)}/>
                                    ):(
                                        <Entypo
                                        style={styles.pencil}
                                        name='check'
                                        color={'green'}
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
                                    secureTextEntry={pass}
                                    mode='outlined'
                                    activeOutlineColor='green'
                                    outlineColor="#3f51b5"
                                    disabled={password_key}
                                    dense={true}
                                    placeholder="Пароль"
                                    value={password}
                                    onChangeText={l => setPassword(l)}
                                    right={<TextInput.Icon onPress={() => setPass(p => !p)} name={pass ? 'eye' : 'eye-off'}/>}
                                    />
                                    {password_key ? (
                                         <Ionicons
                                         style={styles.pencil}
                                         name='pencil'
                                         color={'#3f51b5'}
                                         size={27}
                                         onPress={() => setPassword_key(false)}/>
                                    ):(
                                        <Entypo
                                        style={styles.pencil}
                                        name='check'
                                        color={'green'}
                                        size={27}
                                        onPress={() => setPassword_key(true)}/>
                                    )}

                    </View>
                  </View>
                </View>
                    <Button
                        style={styles.myButton}
                        mode="contained"
                        onPress={() => save()}
                    >
                        Сохранить
                    </Button>
         </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#272B34",
    },
    myButton: {
        marginHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 5,
    },
    pencil:{
        marginTop:20
    },
    input:{
        width: '80%',
        marginTop:10,
        marginLeft:25
    },
    textinput:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        marginHorizontal: 15,
    },
    avatar:{
        alignItems: 'center',
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
    avatar_img:{
        marginVertical: 20,
        marginBottom: 0
    }
  });
export default Profile;
