export class Educates {
  teachers_neptun_code: number;
  course_code: number;
  constructor(teachers_neptun_code, course_code) {
    this.teachers_neptun_code = teachers_neptun_code;
    this.course_code = course_code;
  }
}


export class EducatesWithDate {
  teachers_neptun_code: number;
  course_code: number;
  date: string;
  constructor(teachers_neptun_code, course_code, date) {
    this.teachers_neptun_code = teachers_neptun_code;
    this.course_code = course_code;
    this.date = date;
  }
}
