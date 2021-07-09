import { writeFile, mkdir, rm } from 'fs/promises';
import minify from 'minify';

try{await rm('./docs/src',{recursive:true})}catch(e){} // Catch if does not exist
try{await rm('./dist',{recursive:true})}catch(e){} // Catch if does not exist
await mkdir('./docs/src', { recursive: true });
await mkdir('./dist', { recursive: true });

const minifiedCSS = await minify('./src/essential.css')
writeFile('./docs/src/essntial.css', minifiedCSS);
writeFile('./dist/essntial.css', minifiedCSS);
