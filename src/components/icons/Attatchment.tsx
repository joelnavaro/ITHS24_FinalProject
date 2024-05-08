import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Attatchment = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M7.5 18C6.04131 18 4.64236 17.4205 3.61091 16.3891C2.57946 15.3576 2 13.9587 2 12.5C2 11.0413 2.57946 9.64236 3.61091 8.61091C4.64236 7.57946 6.04131 7 7.5 7H18C19.0609 7 20.0783 7.42143 20.8284 8.17157C21.5786 8.92172 22 9.93913 22 11C22 12.0609 21.5786 13.0783 20.8284 13.8284C20.0783 14.5786 19.0609 15 18 15H9.5C8.83696 15 8.20107 14.7366 7.73223 14.2678C7.26339 13.7989 7 13.163 7 12.5C7 11.837 7.26339 11.2011 7.73223 10.7322C8.20107 10.2634 8.83696 10 9.5 10H17V11.5H9.5C9.23478 11.5 8.98043 11.6054 8.79289 11.7929C8.60536 11.9804 8.5 12.2348 8.5 12.5C8.5 12.7652 8.60536 13.0196 8.79289 13.2071C8.98043 13.3946 9.23478 13.5 9.5 13.5H18C18.3283 13.5 18.6534 13.4353 18.9567 13.3097C19.26 13.1841 19.5356 12.9999 19.7678 12.7678C19.9999 12.5356 20.1841 12.26 20.3097 11.9567C20.4353 11.6534 20.5 11.3283 20.5 11C20.5 10.6717 20.4353 10.3466 20.3097 10.0433C20.1841 9.73998 19.9999 9.46438 19.7678 9.23223C19.5356 9.00009 19.26 8.81594 18.9567 8.6903C18.6534 8.56466 18.3283 8.5 18 8.5H7.5C6.43913 8.5 5.42172 8.92143 4.67157 9.67157C3.92143 10.4217 3.5 11.4391 3.5 12.5C3.5 13.5609 3.92143 14.5783 4.67157 15.3284C5.42172 16.0786 6.43913 16.5 7.5 16.5H17V18H7.5Z"
    />
  </Svg>
)
