const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Ольга",
            "id_5": "Елена",
            "id_6": "Светлана",
            "id_7": "Оксана",
            "id_8": "Дарья",
            "id_9": "Кристина",
            "id_10": "Наталья"  
        }
    }`,

    patronymicJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Иванов",
            "id_2": "Александров",
            "id_3": "Максимов",
            "id_4": "Егоров",
            "id_5": "Олегов",
            "id_6": "Андреев",
            "id_7": "Михайлов",
            "id_8": "Артемов",
            "id_9": "Сергеев",
            "id_10": "Викторов"  
        }
    }`,

    dateJson: `{
        "count" : 12,
        "list" : {
            "id_1": ["января", "30"],
            "id_2": ["февраля", "28"],
            "id_3": ["марта", "31"],
            "id_4": ["апреля", "30"],
            "id_5": ["мая", "31"],
            "id_6": ["июня", "30"],
            "id_7": ["июля", "31"],
            "id_8": ["августа", "31"],
            "id_9": ["сентября", "30"],
            "id_10": ["октября", "31"],
            "id_11": ["ноября", "30"],
            "id_12": ["декабря", "31"]
        }
    }`,

    professionJson: `{
        "unisex" : {
            "1": "Разработчик",
            "2": "Дизайнер",
            "3": "Кассир",
            "4": "Врач",
            "5": "Педагог",
            "6": "Юрист",
            "7": "Экономист",
            "8": "Депутат",
            "9": "Актер",
            "10": "Ученый",
            "11": "Повар",
            "12": "Журналист",
            "13": "Инженер",
            "14": "Менеджер",
            "15": "Официант",
            "16": "Парикмахер",
            "17": "Оператор ПК",
            "18": "Писатель",
            "19": "Технолог",
            "20": "Тренер"
        },

        "male" : {
            "21": "Дальнобойщик",
            "22": "Шахтер",
            "23": "Строитель",
            "24": "Слесарь",
            "25": "Охранник",
            "26": "Пожарный",
            "27": "Военный",
            "28": "Тракторист",
            "29": "Грузчик",
            "30": "Сварщик"
        },

        "female" : {
            "21": "Воспитатель",
            "22": "Няня",
            "23": "Швея",
            "24": "Домохозяйка",
            "25": "Стюардесса",
            "26": "Медсестра",
            "27": "Секретарь",
            "28": "Уборщица",
            "29": "Маникюрша",
            "30": "Косметолог"
        }
    }`,

    RANDOM_GENDER: '',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),


    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function () {
        this.randomIntNumber() == 0 ? this.RANDOM_GENDER = 'Мужчина' : this.RANDOM_GENDER = 'Женщина';
        return this.RANDOM_GENDER;
    },

    randomFirstName: function () {
        if (this.RANDOM_GENDER == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else if(this.RANDOM_GENDER == 'Женщина') {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function () {

        let surname = this.randomValue(this.surnameJson);
        if (this.RANDOM_GENDER == 'Женщина') {
            surname += 'a';
        }
        return surname;
    },

    randomPatronymic: function () {
        let patronymic = this.randomValue(this.patronymicJson);
        this.RANDOM_GENDER == 'Мужчина' ? patronymic += 'ич' : patronymic += 'на';
        return patronymic;
    },

    randomBirthDate: function () {
        let year = this.randomIntNumber(2002, 1980);
        let dateArr = this.randomValue(this.dateJson);
        let month = dateArr[0];
        let day = this.randomIntNumber(dateArr[1], 1) ;

        return day + ' ' + month + ' ' + year;
    },

    randomProfession: function(){
        const obj = JSON.parse(this.professionJson);
        let genderProf = obj.unisex;
        if (this.RANDOM_GENDER == 'Мужчина'){
            genderProf = Object.assign(genderProf, obj.male);
        }
        else if(this.RANDOM_GENDER == 'Женщина'){
            genderProf = Object.assign(genderProf, obj.female);
        }
        
        const count = Object.keys(genderProf).length;
        
        return genderProf[this.randomIntNumber(count, 1)];
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession();

        return this.person;
    }
};
