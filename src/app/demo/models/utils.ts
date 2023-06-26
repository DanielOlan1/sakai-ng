import { ethers } from 'ethers';
import moment from 'moment';

export class Utils {
 static formatUnits(value: number): string {
  const humanReadable = ethers.utils.formatUnits(value, 6);
  return humanReadable;
 }

 static parseUnits(value: number): number {
  const units = ethers.utils.parseUnits(String(value), 6);
  return units.toNumber();
 }

 static formatUnixTimestamp(unixTimestamp: number): string {
  let userLocale = navigator.language;
  //   console.log('userLocale', userLocale);
  moment.locale(userLocale); // set the locale to the user's locale
  return moment.unix(unixTimestamp).format('L LT');
 }
}
