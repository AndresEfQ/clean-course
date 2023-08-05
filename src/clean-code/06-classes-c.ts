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

    constructor({ name, gender, birthdate }: PersonProps ){
      this.birthdate = birthdate;
      this.gender    = gender;
      this.name      = name;
    }
  }

  interface UserProps {
    email:       string;
    role:        string;
  }

  class User {
    
    public email:      string;
    public lastAccess: Date;
    public role:       string;

    constructor({ email, role }: UserProps) {
      this.email      = email;
      this.lastAccess = new Date();
      this.role       = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder   : string;
    workingDirectory : string;
  }

  class Settings {

    public lastOpenFolder   : string;
    public workingDirectory : string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder   = lastOpenFolder;
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

  class UserSettings {

    public person   : Person;
    public user     : User;
    public settings : Settings;

    constructor({
      name, gender, birthdate,
      email, role,
      workingDirectory, lastOpenFolder,
    }: UserSettingsProps ){

    this.person = new Person({ name, gender, birthdate });
    this.user = new User({ email, role });
    this.settings = new Settings({ lastOpenFolder, workingDirectory });

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