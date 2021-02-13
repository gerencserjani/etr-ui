export class User {
  email: string;
  fullName: string;
  password: string;
  birth_date: string;
  sex: string;
  isStudent: number;
  constructor(fullName, email, password, birth_date = "", sex = "ferfi", isStudent = 1) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.birth_date = birth_date;
    this.sex = sex;
    this.isStudent = isStudent;
  }
}

export class Teacher {
  user_neptun_code: any;
  constructor(user_neptun_code) {
    this.user_neptun_code = user_neptun_code;

  }
}


export class Student {
  user_neptun_code: any;
  constructor(user_neptun_code) {
    this.user_neptun_code = user_neptun_code;

  }
}
