export default {
  namespaced: true,
  state: {
    info: [
      {
        name: 'ФИО:',
        value: 'Шмельцер Вячеслав Николаевич'
      },
      {
        name: 'Год рождения:',
        value: '24.09.1986 (31 год)'
      },
      {
        name: 'Семейное положение:',
        value: 'Женат, есть ребёнок'
      },
      {
        name: 'Гражданство:',
        value: 'Россия'
      }
    ],
    education: [
      {
        name: 'Уровень образования:',
        value: 'Высшее'
      },
      {
        name: 'Учебное заведение:',
        value: 'Кемеровский государственный университет'
      },
      {
        name: 'Дата окончания:',
        value: '2008 год'
      },
      {
        name: 'Факультет:',
        value: 'Информатики, экономики и математики'
      },
      {
        name: 'Специальность:',
        value: 'Математические методы в экономике'
      },
      {
        name: 'Форма обучения:',
        value: 'Дневная/Очная'
      }

    ],
    experience: [
      {
        workPeriod: {
          name: 'Период работы:',
          value: 'С августа 2008 года по февраль 2011 года'
        },
        organization: {
          name: 'Место работы:',
          value: 'УПФР в г. Анжеро-Судженске (Государственное учреждение)',
        },
        position: {
          name: 'Должность:',
          value: 'старший специалист отдела выплаты пенсий'
        }
      },
      {
        workPeriod: {
          name: 'Период работы:',
          value: 'С февраля 2011 года по декабрь 2012 года'
        },
        organization: {
          name: 'Место работы:',
          value: 'ОПФР по Кемеровской области',
        },
        position: {
          name: 'Должность:',
          value: 'ведущий специалист-эксперт отдела выплаты пенсий'
        }
      },
      {
        workPeriod: {
          name: 'Период работы:',
          value: 'С декабря 2012 года по настоящее время'
        },
        organization: {
          name: 'Место работы:',
          value: 'ОПФР по Кемеровской области',
        },
        position: {
          name: 'Должность:',
          value: 'ведущий специалист-эксперт отдела социальных выплат'
        }
      }
    ],
    more: [
      {
        name: 'Языки программирования:',
        value: 'JavaScript, C#'
      },
      {
        name: 'Web технологии:',
        value: 'Html, Css, Node.js, Vue.js'
      },
      {
        name: 'Базы данных:',
        value: 'MongoDb, SqlServer, Microsoft Access'
      },
      {
        name: 'Дополнительные сведения:',
        value: 'Трудолюбие, cтрессоустойчивость, обучаемость, интерес к новым современных технологиям, которые могу изучить в случае необходимости'
      }
    ]
  },
  getters: {
      info(state) {
          return state.info;
      },
      more(state) {
        return state.more;
      },
      education(state) {
        return state.education;
      },
      experience(state) {
        return state.experience;
      }

  }
};

