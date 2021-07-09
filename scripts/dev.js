import express from 'express';

const args = process.argv.slice(2).reduce( (args, cur) => {
  const [k, v] = cur.split('=');
  return {...args, [k]: v};
}, {});

const app = express();
const port = parseInt(args.port || 8123);

app.use(express.static('./')); // Looks in root first (finds anything in src)
app.use(express.static('docs')); // then looks in docs if not found
// this will essentially serve unminified src files

app.listen(port, () => {
  console.log(`App Started At http://localhost:${port}`);
});
