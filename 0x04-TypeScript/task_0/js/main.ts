interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

function createStudent(student: Student): Student {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location,
    };
}

const student1 = createStudent({ firstname: 'John', lastname: 'Charles', age: 12, location: 'Nairobi' });
const student2 = createStudent({ firstname: 'Donald', lastname: 'Charles', age: 32, location: 'USA' });

const studentsList: Student[] = [student1, student2];

// Create the table element
const table = document.createElement("table");

// Iterate over the studentsList to create table rows
studentsList.forEach(student => {
    const trow = document.createElement("tr");

    // Create table data cells for each property
    const tdata1 = document.createElement("td");
    tdata1.innerHTML = student.firstname;
    const tdata2 = document.createElement("td");
    tdata2.innerHTML = student.location;

    // Append the data cells to the row
    trow.appendChild(tdata1);
    trow.appendChild(tdata2);

    // Append the row to the table
    table.appendChild(trow);
});

// Append the table to the body (or another container element)
document.body.appendChild(table);
