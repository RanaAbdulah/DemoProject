import React, { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Theme from '../../Utils/Theme';
import styles from './Style';
import TextInputs from '../../Components/TextInputs/TextInputs';
import moment from 'moment';

function ChatScreen({ navigation }) {
  const [messageStr, setMessageStr] = useState('');
  const [count, setCount] = useState(true);
  const scrollViewRef2 = useRef();

  const handleScroll2 = () => {
    scrollViewRef2.current.scrollToEnd({ animated: true });
  };

  const currentTime = new Date(); // set timestamp to current time
  const formateTime = moment(currentTime).format('h:mm');
  const [messages, setMessages] = useState([]);
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.list}>
        <Image
          style={styles.imgstyle}
          source={require('../../Assets/images/text.png')}
        />
        <Text
          style={{
            color: 'black',
            paddingLeft: Theme.wp('5%'),
          }}
        >
          {item}
        </Text>
        <View></View>
        <Text
          style={{
            marginLeft:
              Platform.OS === 'web' ? Theme.wp('78%') : Theme.wp('50%'),
          }}
        >
          {' '}
          {formateTime}
        </Text>
      </View>
      <View style={styles.list1}>
        <Image
          style={styles.imgstyle}
          source={require('../../Assets/images/mesRec.png')}
        />
        <Text
          style={{
            color: 'black',
            paddingLeft: Theme.wp('5%'),
          }}
        >
          Message Received
        </Text>
      </View>
    </View>
  );
  const sendMessage = () => {
    console.log('prev array', messages);
    let _messages = messages;
    _messages.push(messageStr);
    console.log('new array', _messages);
    setMessages(_messages);
    setMessageStr('');
  };

  setTimeout(() => {}, 1000);

  return (
    <View style={styles.MainView}>
      <View style={styles.setView}>
        <ScrollView
          ref={scrollViewRef2}
          onContentSizeChange={handleScroll2}
        >
          <View
            style={{ flexDirection: 'row', marginHorizontal: Theme.wp('2%') }}
          >
            <FlatList
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <View style={styles.chatView}>
          <TextInputs
            value={messageStr}
            chatTxtInput={true}
            onChangeText={setMessageStr}
            selectionColor="#007AFF"
            multiline={true}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Image
              style={styles.SendIcon}
              source={require('../../Assets/images/send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ChatScreen;
