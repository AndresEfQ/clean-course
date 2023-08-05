(() => {

  type Gender = 'M'|'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date,
    ) {}
  }

  class User extends Person {
    
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super( name, gender, birthdate );
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder  : string,
      email                  : string,
      role                   : string,
      name                   : string,
      gender                 : Gender,
      birthdate              : Date
    ) {
      super(email, role, name, gender, birthdate)
    }
  }

  const newUserSettings = new UserSettings(
    'users/home/', 
    'home/', 
    'andres@mail.com', 
    'Admin', 
    'Andrés', 
    'M', 
    new Date('1988-07-02')
  );

})();