import React from 'react'
import type { PropsWithChildren } from 'react'

import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconsProps) => {
  switch (name) {
    case 'circle':
        return <FontAwesome6 name="circle-user" size={38} color="#F7CD2E" />
    case 'cross':
        return <FontAwesome6 name="calendar-xmark" size={38} color="#38CC77" />
  
    default:
      return <FontAwesome6 name="pencil" size={38} color="#0D0D0D" iconStyle="solid"/>

  }
}

export default Icons