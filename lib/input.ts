// imports
import { createInterface } from 'readline';

// input
const input = async (...string:Array<string>):Promise<string> => new Promise<string>((resolve) => {
  const finalString:string = string.join(' ');
  const rl = createInterface({
    'input': process.stdin,
    'output': process.stdout
  });

  rl.question(finalString, answer => {resolve(answer); rl.close();});


  // return new Promise<string>(resolve => rl.question(string.join(' '), resolve)).finally(() => rl.close());
});

// export
export default input;
