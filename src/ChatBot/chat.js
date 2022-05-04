import React, {useState, useCallback, useEffect, useRef} from 'react';
import {io} from 'socket.io-client';
import {Card, Button} from 'react-native-elements';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
const botAvatar = require('./assets/images/mascot.png');

const chatBot = props => {
  const navigation = props.navigation;
  const socket = useRef();
  const [check, setCheck] = useState(true);
  const [sessionId, setSessionId] = useState('');
  const Bot = {
    _id: 2,
    name: 'Bot',
    avatar: botAvatar,
  };
  const [messages, setMessages] = useState([
    {
      _id: 0,
      createdAt: new Date().getTime(),
      user: Bot,
      text: '',
      quickReplies: {
        type: 'radio',
        keepIt: true,
        values: [
          {
            title: "Let's start chat",
            value: "Let's start chat",
          },
          //=======================
        ],
      },
    },
  ]);
  useEffect(() => {
    socket.current = io('ws://172.25.144.1:4000', {jsonp: false});

    socket.current.on('chatMessage', msg => {
      sendBotResponse(msg);
    });
  }, [messages]);
  const sendMessage = async (mess = 'not exist') => {
    socket.current.emit('chatMessage', {
      message: mess,
      sessionId: sessionId,
    });
  };
  const onSend = async message => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
    sendMessage(message[0].text);
  };
  const onQuickReply = message => {
    if (message[0].title == "Let's start chat") {
      setCheck(false);
    }
    setMessages([
      {
        _id: 0,
        text: "How may I help you",
        createdAt: new Date().getTime(),
        user: {_id: 1},
      },
    ]);
    sendMessage(message[0].title);
  };
  const sendBotResponse = text => {
    let msg;
    if (text.type === 'Start') {
      setSessionId(text.sessionId);
      return;
    } else if (text.type === 'Message') {
      msg = {
        _id: messages.length,
        text: text.Data,
        createdAt: new Date().getTime(),
        user: Bot,
      };
    } else if (text.type === 'Radio') {
      if (text.size === 1) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          scroll: horizontal,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              //=======================
            ],
          },
        };
      } else if (text.size === 2) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },

              //=======================
            ],
          },
        };
      } else if (text.size === 3) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },
              {
                title: text.Data3,
                value: text.DataValue3,
              },
              //=======================
            ],
          },
        };
      } else if (type.size === 4) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },
              {
                title: text.Data3,
                value: text.DataValue3,
              },
              {
                title: text.Data4,
                value: text.DataValue4,
              },
              //=======================
            ],
          },
        };
      } else {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },
              {
                title: text.Data3,
                value: text.DataValue3,
              },
              {
                title: text.Data4,
                value: text.DataValue4,
              },
              {
                title: text.Data5,
                value: text.DataValue5,
              },
              //=======================
            ],
          },
        };
      }
    } else if (text.type === 'Photo') {
      msg = {
        _id: messages.length,
        text: text.text,
        createdAt: new Date().getTime(),
        user: Bot,
        isOptions: true,
        data: text.data,
      };
    } else if (text.type === 'Recommend') {
      msg = {
        _id: messages.length,
        text: text.text,
        createdAt: new Date().getTime(),
        user: Bot,
        isRecommend: true,
        data: text.data,
      };
    } else {
      msg = {
        _id: messages.length,
        text: text.Data,
        createdAt: new Date().getTime(),
        user: Bot,
      };
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
  };
  const renderBubble = props => {
    if (props.currentMessage.isOptions) {
      return (
        <View>
          <Text>{props.currentMessage.text}</Text>

          <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
            {props.currentMessage.data.map(item => (
              <Card
                containerStyle={{
                  padding: 0,
                  borderRadius: 15,
                  paddingBottom: 7,
                  overflow: 'hidden',
                }}
                key={item.title}>
                <Card.Image
                  style={{width: 220, height: 110}}
                  resizeMode="cover"
                  source={{uri: item.image}}></Card.Image>
                <Card.Divider />
                <Card.Title>{item.title}</Card.Title>
                <Button
                  title="Choose"
                  style={{height: 35}}
                  onPress={() => {
                    // alert(item.title)
                    sendMessage(item.title)
                  }}
                />
              </Card>
            ))}
          </ScrollView>
        </View>
      );
    } else if (props.currentMessage.isRecommend) {
      return (
        <ScrollView style={{backgroundColor: 'white'}} horizontal={false}>
          <Text>{props.currentMessage.text}</Text>
          {props.currentMessage.data.map(item => (
            <Card
              containerStyle={{
                padding: 8,
                borderRadius: 15,
                paddingBottom: 7,
                overflow: 'hidden',
              }}
              key={item.tipKey}>
              <Text>{item.tip}</Text>
            </Card>
          ))}
          <Button
            title="Pricest Recommendations"
            style={{height: 25, margin: 20}}
            onPress={() => {
              alert('Not completed yet');
            }}
          />
        </ScrollView>
      );
    }
    return (
      <Bubble
        {...props}
        textStyle={{right: {color: 'white'}}}
        wrapperStyle={{
          left: {backgroundColor: '#F0F7F7'},
          right: {backgroundColor: '#3E6DF6'},
        }}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      />
      <GiftedChat
        messages={messages}
        disableComposer={check}
        onSend={message => onSend(message)}
        onQuickReply={quickReply => onQuickReply(quickReply)}
        renderBubble={rb => renderBubble(rb)}
        user={{_id: 1}}
      />
    </View>
  );
};
export default chatBot;
