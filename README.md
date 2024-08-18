### start the app
```bash
node index
```

### perform loadtest
1200 request 400 concurrent
```bash
npx loadtest -n 1200 -c 400 -k http://localhost:3000/test
```
