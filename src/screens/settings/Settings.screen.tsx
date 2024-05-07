/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/input';
import Toggle from '../../components/toggle';
import {selectQuoteToggle} from '../../redux/slices/quote/quoteSelectors';
import {toggleQuoteFetching} from '../../redux/slices/quote/quoteSlice';
import {styles} from './style';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const quotePreference = useSelector(selectQuoteToggle);

  const toggleQuote = () => {
    dispatch(toggleQuoteFetching());
  };

  return (
    <View style={styles.container}>
      <View style={styles.middleContent}>
        <View style={styles.settingItem}>
          <Input
            label={'Work duration'}
            value={'0:05'}
            onChangeText={e => console.log(e)}
          />
        </View>
        <View style={styles.settingItem}>
          <Input
            label={'Break duration'}
            value={'0:05'}
            onChangeText={e => console.log(e)}
          />
        </View>
        <View style={styles.settingItem}>
          <Toggle onValueChange={toggleQuote} value={quotePreference} />
        </View>
      </View>
    </View>
  );
};

export default Settings;
