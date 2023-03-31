import React from 'react';
import { TextInput } from 'react-native';
import Theme from '../../Utils/Theme';
import styles from './Style';
const TextInputs = (props) => {
  const {
    chatTxtInput,
    SimpleTxtInput,
    label,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    width,
    maxLength,
    keyboardType,
    disabled,
    autoCapitalize,
    bwidth,
    onClear,
    editable,
  } = props;
  return (
    <>
      {chatTxtInput === true ? (
        <TextInput
          allowFontScaling={false}
          label={label}
          value={value}
          placeholderTextColor={Theme.grey}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{ ...styles.txtInp, width: width, borderWidth: bwidth }}
          placeholder={placeholder}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          keyboardType={keyboardType}
          editable={editable}
          onClear={onClear}
        />
      ) : SimpleTxtInput === true ? (
        <TextInput
          allowFontScaling={false}
          label={label}
          value={value}
          placeholderTextColor={Theme.placeholderCol}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{ ...styles.desctxtInp, width: width, borderWidth: bwidth }}
          placeholder={placeholder}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          keyboardType={keyboardType}
          multiline={true}
          editable={disabled}
        />
      ) : null}
    </>
  );
};
export default TextInputs;
