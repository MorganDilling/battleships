// imports
import { createInterface } from 'readline';

// input
export default async (...string:Array<string>):Promise<string> => new Promise<string>((resolve) => {
  const outputString:string = string.join(' ');
  const readlineInterface = createInterface({
    'input': process.stdin,
    'output': process.stdout
  });

  readlineInterface.question(outputString, answer => {resolve(answer); readlineInterface.close();});
});
