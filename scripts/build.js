import { writeFile, mkdir, rm } from 'fs/promises';
import minify from 'minify';

try{await rm('./docs/src',{recursive:true})}catch(e){} // Catch if does not exist
try{await rm('./dist',{recursive:true})}catch(e){} // Catch if does not exist
await mkdir('./docs/src', { recursive: true });
await mkdir('./dist', { recursive: true });

const minifiedCSS = await minify('./src/essential.css')
writeFile('./docs/src/essential.css', minifiedCSS);
writeFile('./dist/essential.css', minifiedCSS);

const minifiedHLJSCSS = await minify('./src/hljs.css')
writeFile('./docs/src/hljs.css', minifiedHLJSCSS);
writeFile('./dist/hljs.css', minifiedHLJSCSS);