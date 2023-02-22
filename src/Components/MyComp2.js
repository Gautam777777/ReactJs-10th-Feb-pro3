//Import Area

//1.1 Import SomeDefaultImport from Somelocation/Somelibrary

import React from 'react'
import MyComp3 from './MyComp3';

//1.2 Import { SomeNamedImport } from Somelocation/Somelibrary


//2.Function Defination Area
 function MyComp2() {
    //Every function return something
  return <span>MyComp2 <MyComp3 /> </span>
}

//3.Export Area
export default MyComp2;