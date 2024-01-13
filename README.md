# Internet Computer + Svelte + TS + Vite

This template is intended to make it easier for you to get started with development with the Internet Computer, Svelte, TypeScript and Vite.

Check package.json for used versions.

To clone and use the Github repository for your own purpose following the commands below. 

**Note** to get a clean git repository. A tool called “digit” is used. Make sure you have it installed. If you haven't installed it yet, you can do so using the following command.

```bash
npm install -g degit
```
Summary of installation steps:
1. Install and discuss the github repository
2. Start a local Internet Computer replica
3. Deploy frontend and backend canister to local replica
4. Test the Motoko backend sayHelloTo function


```bash
mkdir myapp && cd myapp
npx degit https://github.com/samlinux-development/ic-svelte
npm install
dfx start --clean --background
dfx deploy 
dfx canister id frontend
```
Open your browser and use the following URL scheme:

- http://[canisterId].localhost:4943
- http://127.0.0.1:4943/?canisterId=[canisterId]

Check the sayHelloTo function with the CLI cammand below:
```bash
dfx canister call backend sayHelloTo '("Roland")'
```

