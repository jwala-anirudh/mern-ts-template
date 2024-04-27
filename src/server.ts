import { Config } from './config';

console.log('PORT', Config.PORT);
console.log('NODE_ENV', Config.NODE_ENV);

function login(username: string): string {
  return username;
}

login('anirudh');
