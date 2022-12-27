
/*Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
    Для предприятия посчитать сумму всех сотрудников во всех отделах.

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников) */

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]


const registration = (user) => {
    user.forEach((company) => {
  let dpt_1 = []
  let count = 0
  dpt_1.push(company.name)
  if (company.departments) {
    company.departments.forEach((dpt_2) => {
      count += dpt_2.employees_count
      if (dpt_2.employees_count) {
        dpt_1.push(`- ${dpt_2.name} (${dpt_2.employees_count} сотрудников)`)
      } else dpt_1.push(`- ${dpt_2.name} (нет сотрудников)`)
    })
  
    if (count) {
      dpt_1[0] += ` (${count} сотрудников)`
    } else dpt_1[0] += ` (нет сотрудников)`
  }  
console.log (dpt_1.join(`\n\ `))
  })
}
registration(enterprises)
