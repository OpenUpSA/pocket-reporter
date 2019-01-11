import React from 'react';
import store from "./src/redux/store";


export default ({ element }) => <Provider {...{ store }}>{element}</Provider>