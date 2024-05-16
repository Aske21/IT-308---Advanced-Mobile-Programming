/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {Text, Animated, Easing} from 'react-native';
import {quoteStyles} from './style';

interface QuoteProps {
  quotes: {quote: string; author: string}[];
}

const Quote: React.FC<QuoteProps> = ({quotes}) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }, 2000);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Animated.View style={[quoteStyles.container, {opacity: fadeAnim}]}>
      <>
        <Text style={[quoteStyles.quoteText]}>
          "{quotes[currentQuoteIndex]?.quote}"
        </Text>
        <Text style={[quoteStyles.quoteText]}>
          - {quotes[currentQuoteIndex]?.author}
        </Text>
      </>
    </Animated.View>
  );
};

export default Quote;
