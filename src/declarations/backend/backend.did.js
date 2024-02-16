export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'calc' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], ['query']),
    'sayHelloTo' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
