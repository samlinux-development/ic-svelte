<p align="left" >
  <img width="240"  src="public/icAcademy.png">
</p>

# Internet Computer + Svelte 5 + TS + Vite

This project is provided by the [IC-Academy](https://blog.icacademy.at) to help you get started with development on the Internet Computer using Svelte, TypeScript and Vite.

The main goal of this repository is to demonstrate how different Svelte components can access separate Motoko backend functions on the Internet Computer.

The project has the following main features:

- Svelte frontend with routing of two routes.
- A central Svelte store to manage an actor function to call the backend for separate functions.

To clone and use the Github repository for your own purpose following the commands below. 

**Note** to get a clean git repository. A tool called “digit” is used. Make sure you have it installed. If you haven't installed it yet, you can do so using the following command.

> Tested on DFX version: 0.22.0

```bash
npm install -g degit
```

Summary of installation steps:

1. Check needed tools
2. Install and discuss the github repository
3. Start a local Internet Computer replica
4. Deploy frontend and backend canister to local replica or Motoko playground
5. Test the Motoko backend functions (sayHelloTo, calc)


```bash
mkdir myapp && cd myapp
```
```bash
npx degit https://github.com/samlinux-development/ic-svelte
npm install
```
```bash
dfx start --clean --background
```
```bash   
# local replica or Motoko playground deployment
dfx deploy | dfx deploy --playground
dfx canister id frontend
```

Open your browser and use the following URL scheme:

- http://[canisterId].localhost:4943

Check the backend functions with the CLI cammand below:

```bash
# sayHelloTo function
dfx canister call backend sayHelloTo '("Roland")'
```

```bash
# calc function
dfx canister call backend calc '(1,2)'
```

