import React from 'react';

const Validation = props => {

  let textSizeDescriptor = 'Text too short';

  if (props.contentLength > 5) {
    textSizeDescriptor = 'Text too long';
  }

  return (
    <div>
      <p>{textSizeDescriptor}</p>
    </div>
  );
};

export default Validation;
