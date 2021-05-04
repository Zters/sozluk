import React from 'react';
import Constants from './Constants';

export default {
    History() {
        try {
            Constants.SqlService.query(
                'CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, wanted TEXT, process_type TEXT, time TEXT)',
            );
        } catch (error) {
            console.log("History table created error");
        }
    },

    Saved() {
        try {
            Constants.SqlService.query(
                'CREATE TABLE IF NOT EXISTS saved (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT, description TEXT, time TEXT)',
            );
        } catch (error) {
            console.log("History table created error");
        }
    }
}