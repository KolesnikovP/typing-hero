import { Form } from 'antd';
import React, {
  useState,
} from 'react';
import { GameSession } from 'features/GameSession';
import cls from './GamePage.module.scss';

export const GamePage: React.FC = () => (
  <GameSession />
);
