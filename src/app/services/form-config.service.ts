import { Injectable } from '@angular/core';
import { FieldsConfig } from '../models/fields-config';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  public getFormConfig(): FieldsConfig[]  {
    return [
      {
        type: 'input',
        fieldName: 'name',
        label: 'Имя',
        description: 'Введите ваше полное имя',
        required: true,
        placeholder: 'Полное имя',
      },
      {
        type: 'input',
        fieldName: 'university',
        label: 'ВУЗ',
        description: 'Введите ваш ВУЗ',
        required: true,
        placeholder: 'Например, ВолгГУ',
        addable: true,
        maxLength: 5
      },
      {
        type: 'select',
        fieldName: 'country',
        description: 'Выберите вашу страну проживания',
        label: 'Страна',
        choices: ['Россия', 'США', 'Китай', 'Германия', 'Франция', 'Япония', 'Канада', 'Австралия', 'Бразилия', 'Индия', 'Испания', 'Италия'],
        required: false,
        modifiers: {
          exclude: ['США', 'Канада'],
          selected: 'Германия'
        }
      },

    {
        type: 'select',
        fieldName: 'maritalStatus',
        description: 'Выберите вашу страну проживания',
        label: 'Семейное положение',
        choices: ['Не женат / не замужем', 'Женат / замужем', 'В активном поиске', 'Всё сложно'],
        required: false,
        modifiers: {
          include: ['Ищу себя'],
          selected: 'В активном поиске'
        }
      },
      {
        type: 'number',
        fieldName: 'age',
        label: 'Возраст',
        description: 'Введите ваш возраст',
        required: true
      },
      {
        type: 'checkbox',
        fieldName: 'hobbies',
        label: 'Хобби',
        required: false,
        options: ['Путешествия', 'Спорт', 'Музыка', 'Рисование', 'Кулинария', 'Фотография', 'Плавание', 'Танцы', 'Видеоигры', 'Программирование', 'Волонтерство'],
        selectAll: true,
      },
      {
        type: 'checkbox',
        fieldName: 'favoriteFood',
        label: 'Любимые блюда',
        options: ['Хлеб', 'Борщ', 'Пельмени', 'Суши', 'Пицца', 'Паста', 'Шашлык', 'Салат', 'Стейк', 'Суп', 'Блины', 'Омлет']
      }
    ];
  }
}