
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function averageValue(array: number[]): number {
  return array.reduce((sum, current) => sum + current, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => a.name.localeCompare(b.name));
      }

      case SortType.Surname: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => a.surname.localeCompare(b.surname));
      }

      case SortType.Age: {
        return students.sort((a: Student, b: Student) => a.age - b.age);
      }

      case SortType.Married: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => Number(a.married) - Number(b.married));
      }

      case SortType.AverageGrade: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => averageValue(a.grades) - averageValue(b.grades));
      }

      default: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => a.name.localeCompare(b.name));
      }
    }
  } else {
    switch (sortBy) {
      case SortType.Name: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => b.name.localeCompare(a.name));
      }

      case SortType.Surname: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => b.surname.localeCompare(a.surname));
      }

      case SortType.Age: {
        return students.sort((a: Student, b: Student) => b.age - a.age);
      }

      case SortType.Married: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => Number(b.married) - Number(a.married));
      }

      case SortType.AverageGrade: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => averageValue(b.grades) - averageValue(a.grades));
      }

      default: {
        // eslint-disable-next-line max-len
        return students.sort((a: Student, b: Student) => b.name.localeCompare(a.name));
      }
    }
  }
}
