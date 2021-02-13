export class Major {
  name: string;
  institution: string;
  faculty: string
  constructor(name, institution, faculty) {
    this.name = name;
    this.institution = institution;
    this.faculty = faculty
  }
}

export class MajorNoName {
  institution: string;
  faculty: string
  constructor(institution, faculty) {
    this.institution = institution;
    this.faculty = faculty
  }
}
