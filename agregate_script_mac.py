import os
import pathspec
import sys

def get_ignored_spec():
    # Проверяем наличие .gitignore и загружаем его шаблоны
    if os.path.exists('.gitignore'):
        with open('.gitignore', 'r', encoding='utf-8') as gitignore_file:
            ignore_patterns = gitignore_file.read()
        spec = pathspec.PathSpec.from_lines(
            'gitwildmatch', ignore_patterns.splitlines()
        )
    else:
        spec = pathspec.PathSpec.from_lines('gitwildmatch', [])
    return spec

def aggregate_files(output_file='output.txt'):
    ignored_spec = get_ignored_spec()

    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, dirs, files in os.walk('./src'):
            # Исключаем игнорируемые каталоги
            dirs[:] = [d for d in dirs if not ignored_spec.match_file(
                os.path.relpath(os.path.join(root, d))
            )]

            for file in files:
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path)

                # Проверяем, игнорируется ли файл
                if not ignored_spec.match_file(relative_path):
                    try:
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            print(f'Обрабатываю файл: {relative_path}')
                            # Пишем относительный путь файла в качестве комментария
                            outfile.write(f'# {relative_path}\n')
                            outfile.write(infile.read())
                            outfile.write('\n\n')
                    except UnicodeDecodeError:
                        print(f'Предупреждение: Пропущен {relative_path} из-за проблем с кодировкой.')
                    except IsADirectoryError:
                        print(f'Пропущен {relative_path} (является директорией).')


if __name__ == '__main__':
    # Получаем имя выходного файла из аргументов, если передан
    output_file = sys.argv[1] if len(sys.argv) > 1 else 'output.txt'
    aggregate_files(output_file)