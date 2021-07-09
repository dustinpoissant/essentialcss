import express from 'express';

const args = process.argv.slice(2).reduce( (args, cur) => {
  const [k, v] = cur.split('=');
  return {...args, [k]: v};
}, {});

const app = express();
const port = parseInt(args.port || 8123);

app.use(express.static('docs'));

app.listen(port, () => {
  console.log(`App Started At http://localhost:${port}`);
});
