import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { ZigbeeNTHomebridgePlatform } from './platform';
import { registerAccessoryClass } from './registry';
import { PhilipsHueWhite } from './accessories/philips/philips-hue-white';
import { PhilipsHueWhiteAndColor } from './accessories/philips/philips-hue-white-and-color';
import { IkeaTadfriDimColortemp } from './accessories/ikea/ikea-tadfri-dim-colortemp';
import { IkeaTadfriDim } from './accessories/ikea/ikea-tadfri-dim';
import { IkeaTadfriOutlet } from './accessories/ikea/ikea-tadfri-outlet';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  registerAccessoryClass('Philips', ['LWA001', 'LWA002', 'LWB006', 'LWB014'], PhilipsHueWhite);
  registerAccessoryClass(
    'Philips',
    ['LCT001', 'LCT007', 'LCT010', 'LCT012', 'LCT014', 'LCT015', 'LCT016', 'LCT021'],
    PhilipsHueWhiteAndColor
  );
  registerAccessoryClass(
    'IKEA',
    [
      'LED1545G12',
      'LED1546G12',
      'LED1537R6/LED1739R5',
      'LED1536G5',
      'LED1903C5/LED1835C6',
      'LED1733G7',
      'LED1732G11',
      'LED1736G9',
    ],
    IkeaTadfriDimColortemp
  );
  registerAccessoryClass(
    'IKEA',
    [
      'LED1623G12',
      'LED1650R5',
      'LED1837R5',
      'LED1842G3',
      'LED1622G12',
      'LED1649C5',
      'LED1836G9',
      'ICPSHC24-10EU-IL-1',
      'ICPSHC24-30EU-IL-1',
    ],
    IkeaTadfriDim
  );
  registerAccessoryClass('IKEA', ['E1603/E1702'], IkeaTadfriOutlet);

  api.registerPlatform(PLATFORM_NAME, ZigbeeNTHomebridgePlatform);
};