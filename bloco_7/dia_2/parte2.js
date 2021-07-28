const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addProperty (obj, key, value) {
      obj[key] = value;
  }

  function listKeys (obj) {
      for (let key in obj) {
          console.log(key);
      }
  }

  function objLength (obj) {
      let count = 0;
      for (let key in obj) {
        count = count += 1
      }
      return count;
  }

  function listValue (obj) {
      for (let key in obj) {
          console.log(obj[key]);
      }
  }

  function countAllStd (obj) {
    let count = 0;
    for (let key in obj) {
        count = count + obj.key.numeroEstudantes;
    }
    return count;
}

function getValueByNumber(obj, index) {
    // const arr = [];
    // for (let key in obj) {
    //     arr.push(obj[key]);
    // }
    // return arr[index]; < Da no mesmo que o de baixo.

    return Object.values(obj)[index];
}

function verifyPair(obj, key, value) {
    if (obj[key] === value) { return true }
    return false;
}

function countMathStudents (obj) {
    let count = 0;
    for (let key in obj) {
        if (obj[key] === 'Matemática') { return obj.numeroEstudantes} // Caso de ser um unico objeto E.G: lesson1
        if (obj[key].materia === 'Matemática') { // Caso de ser o allLessons (Objeto com multiplos objetos de gente que estuda matematica dentro)
            count = count + obj[key].numeroEstudantes;
        }
    }
    return count;
}

function createReport(obj, teacherName) {
    let lessonsTeached = [];
    let count = 0;
    for (let key in obj) {
        if (obj[key].professor === teacherName) {
            lessonsTeached.push(obj[key].materia);
            count += obj[key].numeroEstudantes;
        }
    }
    return {
        professor: teacherName,
        aulas: lessonsTeached,
        estudantes: count
    }
}

addProperty(lesson2, 'turno', 'manhã')

let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//   console.log(lesson2);

//   listKeys(lesson2);
  
//   console.log(objLength(lesson2));

//   listValue(lesson2);

//   console.log(allLessons);

// console.log(countAllStd(allLessons));

// console.log(getValueByNumber(lesson1, 0));

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

// console.log(countMathStudents(allLessons));

console.log(createReport(allLessons, 'Maria Clara'))