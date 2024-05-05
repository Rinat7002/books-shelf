# Подключаем приложение Flask из пакета appfold
from appfold import app

"""

    Этот файл запускает приложение

"""

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=8888)