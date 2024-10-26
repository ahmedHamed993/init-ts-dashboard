export function valuesToFormData(values: Record<string, any>) {
  const formData = new FormData();
  for (let i in values) {
    if (isFile(values[i])) {
      formData.append(i, values[i]);
    } else if (isPlainObject(values[i])) {
      formData.append(i, JSON.stringify(values[i]));
    } else if (isArrayWithChildObjects(values[i])) {
      for (let j = 0; j < values[i].length; j++) {
        formData.append(i, JSON.stringify(values[i][j]));
      }
    } else if (isArrayWithoutChildObjects(values[i])) {
      formData.append(values[i], JSON.stringify(values[i]));
    } else {
      formData.append(i, values[i]);
    }
  }
  return formData;
}

function isPlainObject(value: any) {
  if (typeof value === "object" && !Array.isArray(value)) {
    return true;
  }
  return false;
}

function isFile(value: any) {
  if (value instanceof File) {
    return true;
  }
  return false;
}

function isArrayWithChildObjects(value: any) {
  if (Array.isArray(value)) {
    if (value.length && typeof value[0] === "object") {
      return true;
    }
  }
  return false;
}

function isArrayWithoutChildObjects(value: any) {
  if (Array.isArray(value)) {
    if (value.length && typeof value[0] !== "object") {
      return true;
    }
  }
  return false;
}

// function logFormData(formData: FormData) {
//   for (let [key, value] of formData) {
//     console.log("=>", key, value);
//     console.log("===".repeat(20));
//   }
// }

// const values = {
//   user: {
//     name: "ahmed",
//     age: "25",
//   },
//   status: "pending",
//   tags: ["one", "two", "three"],
//   categories: [
//     {
//       id: "1",
//       name: "category one",
//     },
//     {
//       id: "2",
//       name: "category two",
//     },
//   ],
//   is_active: true,
// };

// valuesToFormData(values);
