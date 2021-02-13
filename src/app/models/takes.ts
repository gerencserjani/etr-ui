export class Takes {
  student_neptun_code: number;
  course_code: number;
  constructor(student_neptun_code, course_code) {
    this.student_neptun_code = student_neptun_code;
    this.course_code = course_code;
  }
}

export class TakesWithMark {
  student_neptun_code: number;
  course_code: number;
  mark: number;
  constructor(student_neptun_code, course_code, mark) {
    this.student_neptun_code = student_neptun_code;
    this.course_code = course_code;
    this.mark = mark;
  }
}

