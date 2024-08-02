import os

def update_links(directory):
    old_url = "vahidnorozi8.github.io"
    new_url = "vnourozi.github.io"
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.html', '.md', '.txt', '.yml')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if old_url in content:
                    updated_content = content.replace(old_url, new_url)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    print(f"Updated links in {filepath}")

# Usage
update_links('/path/to/your/repository')
