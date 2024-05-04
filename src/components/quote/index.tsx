/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {quoteStyles} from './style';

interface QuoteProps {
  quote: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({quote, author}) => {
  return (
    <View style={[quoteStyles.container]}>
      <Text style={[quoteStyles.quoteText]}>" {quote} "</Text>
      <Text style={[quoteStyles.quoteText]}>- {author}</Text>
    </View>
  );
};

export default Quote;
