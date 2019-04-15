/* eslint-disable no-console  */

import React from 'react';

import FolderContent from '../index';
import { mockProps } from '../schema';

const Default = (): JSX.Element => <FolderContent {...mockProps()} />;

export default Default;
