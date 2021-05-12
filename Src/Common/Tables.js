import React from 'react';
import Constants from './Constants';
import {
    ToastAndroid
} from 'react-native';

export default {
    History() {
        try {
            Constants.SqlService.query(
                'CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, wanted TEXT, description TEXT, time TEXT)',
            );
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S100s1", ToastAndroid.SHORT)
        }
    },

    Saved() {
        try {
            Constants.SqlService.query(
                'CREATE TABLE IF NOT EXISTS saved (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT, description TEXT, time TEXT)',
            );
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S100s2", ToastAndroid.SHORT)
        }
    }
}