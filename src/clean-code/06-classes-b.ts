(() => {

  type Gender = 'M'|'F';

  interface PersonProps {
    birthdate: Date;
    gender:    Gender;
    name:      string;
  }

  class Person {

    public birthdate: Date;
    public gender:    Gender;
    public name:      string;

    constructor({ name, gender, birthdate}: PersonProps ){
      this.name      = name;
      this.gender    = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate:   Date;
    email:       string;
    gender:      Gender;
    name:        string;
    role:        string;
  }

  class User extends Person {
    
    public email:      string;
    public lastAccess: Date;
    public role:       string;

    constructor({ name, gender, birthdate, email, role }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate       : Date;
    email           : string;
    gender          : Gender;
    lastOpenFolder  : string;
    name            : string;
    role            : string;
    workingDirectory: string;
  }

  class UserSettings extends User {

    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder   = lastOpenFolder;
    }
  }

  const newUserSettings = new UserSettings({
    birthdate:        new Date('1988-07-02'),
    email:            'andres@mail.com', 
    gender:           'M', 
    lastOpenFolder:   'home/', 
    role:             'Admin', 
    name:             'Andrés', 
    workingDirectory: 'users/home/', 
}); 

  console.log(newUserSettings);

})();