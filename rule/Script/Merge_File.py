import os

print (os.getcwd())
os.chdir("./rule")

# 文件夹列表
file_paths = ["China", "Proxy", "Reject"]


def merge_and_deduplicate_files(path):
    """
    将文件夹中的所有文件内容合并到一个文件中，并去重
    :param path: 文件夹路径
    :return:
    """
    output_file_path = f"{path}/{os.path.basename(path)}.list"
    with open(output_file_path, 'w', encoding='utf8') as out_f:
        data_set = set()
        for file_name in os.listdir(path):
            file_path = os.path.join(path, file_name)
            if os.path.isfile(file_path):
                with open(file_path, 'r', encoding='utf8') as in_f:
                    lines = [line.strip() for line in in_f.readlines() if not line.startswith("#")]
                    data_set.update(lines)
        data_list = sorted(data_set)
        out_f.writelines(line + '\n' for line in data_list if line.strip())
    return output_file_path


if __name__ == '__main__':
    for path in file_paths:
        # 创建文件夹，如果文件夹不存在
        if not os.path.exists(path):
            os.makedirs(path)
            print(f"创建目录 {path} 成功")

        # 合并文件并去重
        output_file_path = merge_and_deduplicate_files(path)

        print(f"{os.path.basename(output_file_path)} 文件创建成功")
