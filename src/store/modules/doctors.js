export default {
    state: {
        doctors: [
            {
            id: 1, 
            img: 'img1',
            surname: 'Иванов', 
            name: 'Константин Алексеевич', 
            specialize: 'Врач окушер гинеколог высшей категории',
            hospital: 'Orakbaeva',
            exp: '12 лет',
            cost: 3500,
            category: 'Высшая',
            reception: 'Взрослые',
                appointmets: [
                    {num: '25', month: 'Июнь', day: 'Четверг', minDay: 'Чт', countA: 3},
                    {num: '27', month: 'Июнь', day: 'Суббота', minDay: 'Сб', countA: 6},
                    {num: '28', month: 'Июнь', day: 'Воскресенье', minDay: 'Вс', countA: 5},
                    {num: '29', month: 'Июнь', day: 'Понедельник', minDay: 'Пн', countA: 4},
                    {num: '1', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 4},
                    {num: '2', month: 'Июль', day: 'Четверг', minDay: 'Чт', countA: 3},
                    {num: '4', month: 'Июль', day: 'Суббота', minDay: 'Сб', countA: 1},
                    {num: '6', month: 'Июль', day: 'Понедельник', minDay: 'Пн', countA: 6},
                    {num: '8', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 2},
                    {num: '10', month: 'Июль', day: 'Пятница', minDay: 'Пт', countA: 5}
                ]
            },
            {
                id: 2, 
                img: 'img2',
                surname: 'Копылова', 
                name: 'Юлия Николаевна', 
                specialize: 'Врач окушер гинеколог высшей категории',
                hospital: 'Orakbaeva',
                exp: '8 лет',
                cost: 1500,
                category: 'Высшая',
                reception: 'Взрослые',
                    appointmets: [
                        {num: '25', month: 'Июнь', day: 'Четверг', minDay: 'Чт', countA: 3},
                        {num: '27', month: 'Июнь', day: 'Суббота', minDay: 'Сб', countA: 6},
                        {num: '28', month: 'Июнь', day: 'Воскресенье', minDay: 'Вс', countA: 5},
                        {num: '29', month: 'Июнь', day: 'Понедельник', minDay: 'Пн', countA: 4},
                        {num: '1', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 4},
                        {num: '2', month: 'Июль', day: 'Четверг', minDay: 'Чт', countA: 3},
                        {num: '4', month: 'Июль', day: 'Суббота', minDay: 'Сб', countA: 1},
                        {num: '6', month: 'Июль', day: 'Понедельник', minDay: 'Пн', countA: 6},
                        {num: '8', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 2},
                        {num: '10', month: 'Июль', day: 'Пятница', minDay: 'Пт', countA: 5}
                    ]
                },
                {
                    id: 3, 
                    img: 'img3',
                    surname: 'Перфирьев', 
                    name: 'Игорь Николаевич', 
                    specialize: 'Терапевт',
                    hospital: 'Orakbaeva',
                    exp: '10 лет',
                    cost: 4500,
                    category: 'Высшая',
                    reception: 'Взрослые',
                        appointmets: [
                            {num: '25', month: 'Июнь', day: 'Четверг', minDay: 'Чт', countA: 3},
                            {num: '27', month: 'Июнь', day: 'Суббота', minDay: 'Сб', countA: 6},
                            {num: '28', month: 'Июнь', day: 'Воскресенье', minDay: 'Вс', countA: 5},
                            {num: '29', month: 'Июнь', day: 'Понедельник', minDay: 'Пн', countA: 4},
                            {num: '1', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 4},
                            {num: '2', month: 'Июль', day: 'Четверг', minDay: 'Чт', countA: 3},
                            {num: '4', month: 'Июль', day: 'Суббота', minDay: 'Сб', countA: 1},
                            {num: '6', month: 'Июль', day: 'Понедельник', minDay: 'Пн', countA: 6},
                            {num: '8', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 2},
                            {num: '10', month: 'Июль', day: 'Пятница', minDay: 'Пт', countA: 5}
                        ]
                    },
                    {
                        id: 4, 
                        img: 'img4',
                        surname: 'Волкова', 
                        name: 'Мария Андреевна', 
                        specialize: 'Гинеколог',
                        hospital: 'Orakbaeva',
                        exp: '5 лет',
                        cost: 3500,
                        category: 'Высшая',
                        reception: 'Взрослые',
                            appointmets: [
                                {num: '25', month: 'Июнь', day: 'Четверг', minDay: 'Чт', countA: 3},
                                {num: '27', month: 'Июнь', day: 'Суббота', minDay: 'Сб', countA: 6},
                                {num: '28', month: 'Июнь', day: 'Воскресенье', minDay: 'Вс', countA: 5},
                                {num: '29', month: 'Июнь', day: 'Понедельник', minDay: 'Пн', countA: 4},
                                {num: '1', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 4},
                                {num: '2', month: 'Июль', day: 'Четверг', minDay: 'Чт', countA: 3},
                                {num: '4', month: 'Июль', day: 'Суббота', minDay: 'Сб', countA: 1},
                                {num: '6', month: 'Июль', day: 'Понедельник', minDay: 'Пн', countA: 6},
                                {num: '8', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 2},
                                {num: '10', month: 'Июль', day: 'Пятница', minDay: 'Пт', countA: 5}
                            ]
                        },
                        {
                            id: 5, 
                            img: 'img5',
                            surname: 'Соколова', 
                            name: 'Анастасия Эдуардовна', 
                            specialize: 'Алерголог',
                            hospital: 'Orakbaeva',
                            exp: '15 лет',
                            cost: 5500,
                            category: 'Средняя',
                            reception: 'Дети',
                                appointmets: [
                                    {num: '25', month: 'Июнь', day: 'Четверг', minDay: 'Чт', countA: 3},
                                    {num: '27', month: 'Июнь', day: 'Суббота', minDay: 'Сб', countA: 6},
                                    {num: '28', month: 'Июнь', day: 'Воскресенье', minDay: 'Вс', countA: 5},
                                    {num: '29', month: 'Июнь', day: 'Понедельник', minDay: 'Пн', countA: 4},
                                    {num: '1', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 4},
                                    {num: '2', month: 'Июль', day: 'Четверг', minDay: 'Чт', countA: 3},
                                    {num: '4', month: 'Июль', day: 'Суббота', minDay: 'Сб', countA: 1},
                                    {num: '6', month: 'Июль', day: 'Понедельник', minDay: 'Пн', countA: 6},
                                    {num: '8', month: 'Июль', day: 'Среда', minDay: 'Ср', countA: 2},
                                    {num: '10', month: 'Июль', day: 'Пятница', minDay: 'Пт', countA: 5}
                                ]
                            }
        ]
    },
    mutations: {
       
    },
    actions: {
    },
    getters: {
        GET_DOCTORS (state) {
            return state.doctors
        },
        GET_ID_DOCTOR: state => id => {
            return state.doctors.find(doc => doc.id === id)
        }
    }
}