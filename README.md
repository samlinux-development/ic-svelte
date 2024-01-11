# Internet Computer + Svelte + TS + Vite

This template is designed to help you get started developing with Internet Computer, Svelte, and TypeScript in Vite.

Check package.json for used versions.

To clone and use the Github repository for your own purpose following the commands below. Note to get a clean git repository. A tool named digit is used. Make sure you have installed it. If you have not installed it yet, you can do it with the following command.

```bash
npm install -g degit
```

```bash
mkdir ic-svelte && cd ic-svelte
npx degit https://github.com/samlinux-development/ic-svelte
npm install
dfx start --clean --background
dfx deploy 
dfx canister id frontend
```
Open your browser and use the following URL scheme:

- http://[canisterId].localhost:4943
- http://127.0.0.1:4943/?canisterId=[canisterId]

