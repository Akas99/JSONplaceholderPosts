import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
`;

export default function MyButton({fn, text}) {
  return (
    <Button onClick={fn} className='px-2 py-1 my-2 rounded-md'>
      {text}
    </Button>
  )
}
