const userValidator = {
  set(object, prop, value) {
    const validProps = ['name', 'email'];
    if(!validProps.includes(prop)) {
      throw new Error(`Can't set ${prop}`);
    }else {
      object[prop] = value;
      return true;
    }
  },
};

class User {
  constructor({name, email}) {
    this.name = name;
    this.email = email;

    return new Proxy(this, userValidator);
  }
}

const user = new User({name:"yong", email: "yongsu1481@gmail.com"});
user.password = "12344576";