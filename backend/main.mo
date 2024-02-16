import Nat "mo:base/Nat";
actor {
	public query func sayHelloTo(name : Text) : async Text {
    return "Hello " # name # " 👋 ";
  };

  public query func calc(a : Nat, b : Nat) : async Nat {
    return a + b;
  };
};