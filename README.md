- [Элементы формы](#markdown-header-form-elements)
    - [пример формы](#markdown-header-form-example)
    - [input](#markdown-header-input)
    - [textarea](#markdown-header-textarea)
    - [checkbox](#markdown-header-checkbox)
    - [radio](#markdown-header-radio)
    - [file](#markdown-header-file)
    - [select](#markdown-header-select)
- [Социальные кнопки](#markdown-header-social-buttons)
- [Модальные окна](#markdown-header-modals)
    - [JewelryModals.js - описание плагина](#markdown-header-jewelrymodalsjs)
- [Табы](#markdown-header-tabs)

# Form elements #

> scss/_forms.scss


- **form__alert** - Общая ошибка формы  
- **form__row** - Строка формы  
- **form__control** - Обертка, внутри которой выводится ошибка для конкретного элмента/элементов формы - **блок с ошибкой скрыт**  
    - **form__control--error** - модификатор, при наличии которого **блок с ошибкой показан**  
- **form__elem** - Обертка элемента формы  
- **form__label** - label для элемента формы  
- **form__input** - обертка для input [type= "text / email / password / tel / number / url / date / ..."]  
- **form__textarea** - обертка для textarea  
- **form__error** - блок в котором выводится ошибка для **form__control**  
(по умолчанию скрыт, показывается только внутри блока **.form__control.form__control--error**)

## Form Example ##

```
#!html

<form action="" class="form">
    <div class="form__alert">
        Заполните обязательные поля
    </div>

    <div class="form__row">
        <div class="form__control">
            <div class="form__elem">
                <label for="inp_" class="form__label">E-mail</label>
                <div class="form__input">
                    <input type="text" id="inp_" name="inp_" placeholder="">
                </div>
            </div>
            <div class="form__error"></div>
        </div>
    </div>

    <div class="form__row">
        <div class="form__control">
            <div class="form__elem">
                <label for="inp_" class="form__label">Пароль</label>
                <div class="form__input">
                    <input type="password" id="inp_" name="inp_" placeholder="">
                </div>
            </div>
            <div class="form__error"></div>
        </div>
    </div>

    <div class="form__row">
        <button class="button">Зарегистрироваться</button>
    </div>
</form>

```

## input ##

```
#!html
<div class="form__row">
    <div class="form__control">
        <div class="form__elem">
            <label for="inp_" class="form__label">Введите имя</label>
            <div class="form__input">
                <input type="text" id="inp_" name="inp_" placeholder="">
            </div>
        </div>
        <div class="form__error"></div>
    </div>
</div>
```

##  ##
input с ошибкой - добавлен класс **form__control--error**  
Текст ошибки выводится в **form__error**

```
#!html
<div class="form__row">
    <div class="form__control form__control--error">
        <div class="form__elem">
            <label for="inp_" class="form__label">Введите имя</label>
            <div class="form__input">
                <input type="text" id="inp_" name="inp_" placeholder="">
            </div>
        </div>
        <div class="form__error">Заполните поле</div>
    </div>
</div>
```

## textarea ##

```
#!html
<div class="form__row">
    <div class="form__control">
        <div class="form__elem">
            <label for="inp_" class="form__label">Введите текст</label>
            <div class="form__textarea">
                <textarea id="inp_" name="inp_" cols="30" rows="10" placeholder=""></textarea>
            </div>
        </div>
        <div class="form__error"></div>
    </div>
</div>
```

##  ##
textarea с ошибкой - добавлен класс **form__control--error**  
Текст ошибки выводится в **form__error**

```
#!html
<div class="form__row">
    <div class="form__control form__control--error">
        <div class="form__elem">
            <label for="inp_" class="form__label">Введите текст</label>
            <div class="form__textarea">
                <textarea id="inp_" name="inp_" cols="30" rows="10" placeholder=""></textarea>
            </div>
        </div>
        <div class="form__error">Заполните поле</div>
    </div>
</div>
```

## checkbox ##

```
#!html
<div class="form__row">
    <div class="form__control">
        <div class="form__elem form__elem--str">
            <div class="form__checkbox">
                <input type="checkbox" id="inp_" name="inp_">
            </div>
            <label for="inp_" class="form__label">Согласен с правилами</label>
            <div class="form__error"></div>
        </div>
    </div>
</div>
```

##  ##
checkbox с ошибкой - добавлен класс **form__control--error**  
Текст ошибки выводится в **form__error**
```
#!html
<div class="form__row">
    <div class="form__control form__control--error">
        <div class="form__elem form__elem--str">
            <div class="form__checkbox">
                <input type="checkbox" id="inp_" name="inp_">
            </div>
            <label for="inp_" class="form__label">Согласен с правилами</label>
            <div class="form__error">Подтвердите согласиес правилами</div>
        </div>
    </div>
</div>
```

## radio ##
```
#!html
<div class="form__row">
    <div class="form__control">
        <div class="form__elem form__elem--str">
            <span class="form__label">Пол</span>
        </div>
        <div class="form__elem form__elem--str">
            <div class="form__radio">
                <input type="radio" id="inp_" name="inp_">
            </div>
            <label for="inp_" class="form__label">Мужской</label>
        </div>
        <div class="form__elem form__elem--str">
            <div class="form__radio">
                <input type="radio" id="inp_" name="inp_">
            </div>
            <label for="inp_" class="form__label">Женский</label>
        </div>
        <div class="form__error"></div>
    </div>
</div>
```

##  ##
radio с ошибкой - добавлен класс **form__control--error**  
Текст ошибки выводится в **form__error**

```
#!html
<div class="form__row">
    <div class="form__control form__control--error">
        <div class="form__elem form__elem--str">
            <span class="form__label">Пол</span>
        </div>
        <div class="form__elem form__elem--str">
            <div class="form__radio">
                <input type="radio" id="inp_" name="inp_">
            </div>
            <label for="inp_" class="form__label">Мужской</label>
        </div>
        <div class="form__elem form__elem--str">
            <div class="form__radio">
                <input type="radio" id="inp_" name="inp_">
            </div>
            <label for="inp_" class="form__label">Женский</label>
        </div>
        <div class="form__error">Выберите пол</div>
    </div>
</div>
```

## file ##

```
#!html
<div class="form__row">
    <div class="form__control">
        <div class="form__elem">
            <label for="inp_" class="form__label">Выберите файл</label>
            <div>
                <input type="file" id="inp_" name="inp_" placeholder="">
            </div>
        </div>
        <div class="form__error"></div>
    </div>
</div>
```

##  ##
input type file с ошибкой - добавлен класс **form__control--error**  
Текст ошибки выводится в **form__error**

```
#!html
<div class="form__row">
    <div class="form__control form__control--error">
        <div class="form__elem">
            <label for="inp_" class="form__label">Выберите файл</label>
            <div>
                <input type="file" id="inp_" name="inp_" placeholder="">
            </div>
        </div>
        <div class="form__error">Выберите файл</div>
    </div>
</div>
```

## select ##

```
#!html
<div class="form__row">
    <div class="form__control">
        <div class="form__elem">
            <label for="inp_" class="form__label">Выберите слово</label>
            <div class="form__select">
                <select id="" name="">
                    <option value="1" disabled selected>Lorem</option>
                    <option value="2">ipsum</option>
                    <option value="3">dolor</option>
                </select>
            </div>
        </div>
        <div class="form__error"></div>
    </div>
</div>
```

##  ##
input type file с ошибкой - добавлен класс **form__control--error**  
Текст ошибки выводится в **form__error**

```
#!html
<div class="form__row">
    <div class="form__control form__control--error">
        <div class="form__elem">
            <label for="inp_" class="form__label">Выберите слово</label>
            <div class="form__select">
                <select id="" name="">
                    <option value="1" disabled selected>Lorem</option>
                    <option value="2">ipsum</option>
                    <option value="3">dolor</option>
                </select>
            </div>
        </div>
        <div class="form__error">Выберите слово</div>
    </div>
</div>
```


# Social buttons #

> scss/_social.scss

- **fb** - facebook  
- **vk** - вкщнтакте  
- **ok** - одноклассники   
- **tw** - twitter  
- **yt** - youtube  
- **gp** - google plus  
- **ya** - yandex  
- **go** - google  

```
#!html
<div class="social">
    <!--authorization-->
    <a href="" class="social__item social__item--fb js-social--auth js-social--auth-fb"></a>
    <a href="" class="social__item social__item--vk js-social--auth js-social--auth-vk"></a>
    <a href="" class="social__item social__item--ok js-social--auth js-social--auth-ok"></a>
    <a href="" class="social__item social__item--tw js-social--auth js-social--auth-tw"></a>
    <a href="" class="social__item social__item--yt js-social--auth js-social--auth-yt"></a>
    <a href="" class="social__item social__item--gp js-social--auth js-social--auth-gp"></a>
    <a href="" class="social__item social__item--ya js-social--auth js-social--auth-ya"></a>
    <a href="" class="social__item social__item--go js-social--auth js-social--auth-go"></a>

    <!--like-->
    <a href="" class="social__item social__item--fb js-social--like js-social--like-fb"></a>
    <a href="" class="social__item social__item--vk js-social--like js-social--like-vk"></a>
    <a href="" class="social__item social__item--ok js-social--like js-social--like-ok"></a>
    <a href="" class="social__item social__item--tw js-social--like js-social--like-tw"></a>
    <a href="" class="social__item social__item--yt js-social--like js-social--like-yt"></a>
    <a href="" class="social__item social__item--gp js-social--like js-social--like-gp"></a>
    <a href="" class="social__item social__item--ya js-social--like js-social--like-ya"></a>
    <a href="" class="social__item social__item--go js-social--like js-social--like-go"></a>
    
    <!--share-->
    <a href="" class="social__item social__item--fb js-social--share js-social--share-fb"></a>
    <a href="" class="social__item social__item--vk js-social--share js-social--share-vk"></a>
    <a href="" class="social__item social__item--ok js-social--share js-social--share-ok"></a>
    <a href="" class="social__item social__item--tw js-social--share js-social--share-tw"></a>
    <a href="" class="social__item social__item--yt js-social--share js-social--share-yt"></a>
    <a href="" class="social__item social__item--gp js-social--share js-social--share-gp"></a>
    <a href="" class="social__item social__item--ya js-social--share js-social--share-ya"></a>
    <a href="" class="social__item social__item--go js-social--share js-social--share-go"></a>
</div>
```

# Modals #

> scss/_social.scss  
> js/jewelryModals.js

```
#!html
<div class="modals">

    <!--<div class="modal js-modal--registration">-->
    <!--<div class="modal js-modal--auth">-->
    <!--<div class="modal js-modal--password">-->
    <!--<div class="modal js-modal--feedback">-->
    <!--<div class="modal js-modal--age">-->
    <!--<div class="modal js-modal--add_photo">-->
    <!--<div class="modal js-modal--photo">-->
    <div class="modal">
        <div class="modal__body">
            <a href="" class="modal__close"></a>

            <div class="modal__header">
                <div class="modal__title"></div>
            </div>

            <div class="modal__content">

            </div>
            <div class="modal__footer">

            </div>
        </div>
    </div>

    <div class="modals__fog"></div>
</div>
```

## Модальное окно авторизации ##
```
#!html
<div class="modal js-modal--auth">
    <div class="modal__body">
        <a href="" class="modal__close"></a>

        <div class="modal__header">
            <div class="modal__title">Авторизация</div>
        </div>

        <div class="modal__content">
            <div class="social">
                <!--authorization-->
                <a href="" class="social__item social__item--fb js-social--auth js-social--auth-fb"></a>
                <a href="" class="social__item social__item--vk js-social--auth js-social--auth-vk"></a>
                <a href="" class="social__item social__item--ok js-social--auth js-social--auth-ok"></a>
                <a href="" class="social__item social__item--tw js-social--auth js-social--auth-tw"></a>
                <a href="" class="social__item social__item--yt js-social--auth js-social--auth-yt"></a>
                <a href="" class="social__item social__item--gp js-social--auth js-social--auth-gp"></a>
                <a href="" class="social__item social__item--ya js-social--auth js-social--auth-ya"></a>
                <a href="" class="social__item social__item--go js-social--auth js-social--auth-go"></a>
            </div>

            <form action="" class="form">
                <div class="form__alert">
                    Введите email и пароль
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">E-mail</label>
                            <div class="form__input">
                                <input type="text" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">Пароль</label>
                            <div class="form__input">
                                <input type="password" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <button class="button">Войти</button>
                </div>
            </form>
        </div>
    </div>
</div>
```

## Модальное окно регистрации ##
```
#!html
<div class="modal js-modal--registration">
    <div class="modal__body">
        <a href="" class="modal__close"></a>

        <div class="modal__header">
            <div class="modal__title">Регистрация</div>
        </div>

        <div class="modal__content">
            <div class="social">
                <!--authorization-->
                <a href="" class="social__item social__item--fb js-social--auth js-social--auth-fb"></a>
                <a href="" class="social__item social__item--vk js-social--auth js-social--auth-vk"></a>
                <a href="" class="social__item social__item--ok js-social--auth js-social--auth-ok"></a>
                <a href="" class="social__item social__item--tw js-social--auth js-social--auth-tw"></a>
                <a href="" class="social__item social__item--yt js-social--auth js-social--auth-yt"></a>
                <a href="" class="social__item social__item--gp js-social--auth js-social--auth-gp"></a>
                <a href="" class="social__item social__item--ya js-social--auth js-social--auth-ya"></a>
                <a href="" class="social__item social__item--go js-social--auth js-social--auth-go"></a>
            </div>

            <form action="" class="form">
                <div class="form__alert">
                    Заполните обязательные поля
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">Имя</label>
                            <div class="form__input">
                                <input type="text" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">E-mail</label>
                            <div class="form__input">
                                <input type="text" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">Пароль</label>
                            <div class="form__input">
                                <input type="password" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">Повторить пароль</label>
                            <div class="form__input">
                                <input type="password" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <button class="button">Зарегистрироваться</button>
                </div>
            </form>
        </div>
        
        <div class="modal__footer">

        </div>
    </div>
</div>
```

## Модальное окно восстановления пароля ##
```
#!html
<div class="modal js-modal--password">
    <div class="modal__body">
        <a href="" class="modal__close"></a>

        <div class="modal__header">
            <div class="modal__title">Восстановление пароля</div>
        </div>

        <div class="modal__content">
            <form action="" class="form">
                <div class="form__alert">
                    Заполните поля
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">Пароль</label>
                            <div class="form__input">
                                <input type="password" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <div class="form__control">
                        <div class="form__elem">
                            <label for="inp_" class="form__label">Повторите пароль</label>
                            <div class="form__input">
                                <input type="password" id="inp_" name="inp_" placeholder="">
                            </div>
                        </div>
                        <div class="form__error">Заполните поле</div>
                    </div>
                </div>

                <div class="form__row">
                    <button class="button">Восстановить пароль</button>
                </div>
            </form>
        </div>
    </div>
</div>
```

## JewelryModals.js ##

###**show()**

```
jewelryModals.show(selector[,options]);
```

| **Options**| Type           | Description              |
 ----------------- | ---------------- | ------------------:
| `fog`			   | boolean          | Наличие фона под модальным окном |
| `close`		   | boolean          | Возможность закрыть модальное окно |
| `title`		   | string/html 	  | Заголовок модального окна |
| `message`		   | string/html 	  | Сообщение в модальном окне |
| `speed`		   | integer 		  | Скорость показа модального окна |
| `beforeShow`	   | function  		  | Функция перед показом модального окна |
| `afterShow`	   | function  		  | Функция после показа модального окна |
| `beforeHide`	   | function  		  | Функция перед закрытием модального окна |
| `afterHide`	   | function  		  | Функция после закрытия модального окна |



###**hide()**
```
#!js
jewelryModals.hide(selector[,options]);
```

| **Options**| Type           | Description              |
 ----------------- | ---------------- | ------------------:
| `beforeHide`	   | function  		  | Функция перед закрытием модального окна |
| `afterHide`	   | function  		  | Функция после закрытия модального окна |


## Tabs ##
> scss/_tabs.scss  
> js/jewelryTabs.js

```
#!html
<div class="tabs">
    <div class="tabs__bookmarks">
        <a href="#tab1" class="tabs__bookmark js-show-tab tabs__bookmark--active">Lorem</a>
        <a href="#tab2" class="tabs__bookmark js-show-tab">ipsum</a>
        <a href="#tab3" class="tabs__bookmark js-show-tab">dolor</a>
    </div>

    <div class="tabs__wrapper">
        <div id="tab1" class="tab tab--1 tab--active">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, neque?
        </div>
        <div id="tab2" class="tab tab--2">
            Lorem ipsum dolor sit amet.
        </div>
        <div id="tab3" class="tab tab--3">
            Lorem ipsum dolor sit amet, consectetur.
        </div>
    </div>
</div>
```