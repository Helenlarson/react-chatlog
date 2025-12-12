import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry'; 

const ChatLog = ({ entries }) => {
  return (
    <section className="chat-log">
      {entries.map((entry) => (
        <ChatEntry