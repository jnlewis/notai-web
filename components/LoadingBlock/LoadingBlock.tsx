import React from 'react';
import styles from './LoadingBlock.style';

export default function LoadingBlock() {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    </>
  );
}
