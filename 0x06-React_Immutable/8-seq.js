import { fromJS, Seq } from 'immutable';

// Function to print best students with score >= 70
export default function printBestStudents(grades) {
  const students = fromJS(grades);

  // Use `seq` to create a sequence and filter students based on score
  students
    .filter(student => student.get('score') >= 70)
    .forEach(student => {
      const firstName = student.get('firstName').capitalize();
      const lastName = student.get('lastName').capitalize();
      console.log(`${firstName} ${lastName}`);
    });
}
